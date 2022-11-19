import { GitHubIcon, LinkedInIcon } from '../Icons'

export function FooterMessage() {
  return (
    <div className="fixed bottom-0 right-0 left-0 flex items-center justify-center gap-2 bg-stone-100 py-1 w-screen shadow shadow-gray-900">
      <div className="w-12 h-px bg-gray-500" />
      <p className="text-xs text-gray-400">pedrovasalmeida@gmail.com</p>

      <div className="flex fixed right-0 bottom-0 gap-2 py-1 px-2 text-xs bg-stone-100 rounded-tl-lg shadow shadow-gray-900">
        <a
          href="https://github.com/pedrovasalmeida"
          rel="noopener norefeerer nofollow noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/pedrovasalmeida/"
          rel="noopener norefeerer nofollow noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}
