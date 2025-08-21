// Book types
export interface GoogleBook {
  volumeInfo: {
    title: string
    authors?: string[]
    description?: string
    infoLink: string
    imageLinks?: {
      smallThumbnail: string
      thumbnail: string
    }
  }
}

export interface GoogleBooksResponse {
  items: GoogleBook[]
}

// YouTube types
export interface YouTubeVideo {
  snippet: {
    title: string
    resourceId: {
      videoId: string
    }
    thumbnails: {
      medium: {
        url: string
      }
    }
  }
}

export interface YouTubePlaylistResponse {
  items: YouTubeVideo[]
}

// Dribbble types
export interface DribbbleShot {
  id: number
  title: string
  description: string
  html_url: string
  images: {
    normal: string
    hidpi?: string
  }
}

// Website types
export interface Website {
  name: string
  url: string
  icon: string
}

// Portfolio item types
export interface PortfolioItem {
  id: number
  name: string
  description: string
  icon: string
  component: string
}