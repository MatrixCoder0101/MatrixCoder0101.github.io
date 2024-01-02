import ytdl from 'ytdl-core'
import ytSearch from 'yt-search'

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

export default async function handler(req, res) {
  try {
    const query = req.query.query || req.query.link;

    if (!query) {
      return res.status(400).json({ error: 'Query parameter or link is missing.' });
    }

    const isLink = ytdl.validateURL(query);

    let videoInfo;
    if (isLink) {
      videoInfo = await ytdl.getInfo(query, { filter: 'audioandvideo' });
    } else {
      const searchResults = await ytSearch(query);
      if (!searchResults.videos.length) {
        return res.status(404).json({ error: 'No videos found for the given query.' });
      }

      videoInfo = await ytdl.getInfo(searchResults.videos[0].url, { filter: 'audioandvideo' });
    }

    const videoFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'highestvideo', filter: 'videoandaudio' });
    const downloadUrl = videoFormat.url;

    // Format duration into hours, minutes, and seconds
    const durationHours = Math.floor(videoInfo.videoDetails.lengthSeconds / 3600);
    const durationMinutes = Math.floor((videoInfo.videoDetails.lengthSeconds % 3600) / 60);
    const durationSeconds = videoInfo.videoDetails.lengthSeconds % 60;

    const result = {
      title: videoInfo.videoDetails.title,
      views: videoInfo.videoDetails.viewCount,
      youtubeUrl: isLink ? query : videoInfo.videoDetails.video_url,
      downloadUrl: downloadUrl,  // Direct video download URL
      uploadDate: new Date(videoInfo.videoDetails.uploadDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), // Format uploadDate
      uploadChannel: videoInfo.videoDetails.author.name,
      duration: `${durationHours}h ${durationMinutes}m ${durationSeconds}s`,
      size: videoFormat.contentLength ? formatBytes(parseInt(videoFormat.contentLength)) : 'Unknown', // Update size calculation
      thumbnail: videoInfo.videoDetails.thumbnail.thumbnails[0].url,
      likes: videoInfo.videoDetails.likes || 0,
      dislikes: videoInfo.videoDetails.dislikes || 0,
    };

    console.log('Download result:', result);
    res.json(result);
  } catch (error) {
    console.error('Error during download:', error);
    res.status(500).json({ error: 'An error occurred during download.' });
  }
}
