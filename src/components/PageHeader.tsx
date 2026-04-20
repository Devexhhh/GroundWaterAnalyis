interface PageHeaderProps {
  chapter: string
  title: string
  subtitle?: string
  description?: string
}

export default function PageHeader({ chapter, title, subtitle, description }: PageHeaderProps) {
  return (
    <div className="topo-bg border-b border-ink/8 bg-water-faint selection:bg-blue-100 selection:text-blue-900">
      {/* Changed pt-16 to pt-32 to push the text down below the fixed navbar */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-10">
        <p className="chapter-number mb-4">{chapter}</p>
        <h1 className="display-heading text-4xl sm:text-5xl max-w-2xl mb-4">{title}</h1>
        {subtitle && (
          <p className="font-sans text-ink/50 text-sm tracking-wide uppercase font-medium mb-3">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="font-sans text-ink/60 text-base max-w-xl leading-relaxed mt-4">
            {description}
          </p>
        )}
        <div className="mt-8 h-px bg-gradient-to-r from-water via-water/30 to-transparent" />
      </div>
    </div>
  )
}