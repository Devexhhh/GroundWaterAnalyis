interface ChartEmbedProps {
  title: string
  caption?: string
  src?: string          // path to exported chart image
  height?: string
  placeholder?: string
}

export default function ChartEmbed({
  title,
  caption,
  src,
  height = 'h-72',
  placeholder = 'Insert your exported chart image here'
}: ChartEmbedProps) {
  return (
    <figure className="my-8 selection:bg-blue-100 selection:text-blue-900">
      <div className={`border border-ink/10 bg-white rounded-sm overflow-hidden ${height}`}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={title} className="w-full h-full object-contain p-4" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-water-faint topo-bg">
            <div className="w-10 h-10 rounded-full border-2 border-water/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-water/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="font-mono text-xs text-water/50 text-center px-4">{placeholder}</p>
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex items-start gap-3">
        <span className="font-mono text-[10px] text-water/60 mt-0.5 shrink-0 uppercase tracking-wider">
          Fig.
        </span>
        <div>
          <p className="font-sans text-sm font-medium text-ink">{title}</p>
          {caption && (
            <p className="font-sans text-xs text-ink/45 mt-0.5 leading-relaxed">{caption}</p>
          )}
        </div>
      </figcaption>
    </figure>
  )
}
