function LoadingIndicator({ label = 'Loading', className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-live="polite" role="status">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-primary shadow-sm">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </span>

      <div className="space-y-1">
        <p className="text-sm font-bold text-slate-700">{label}</p>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-secondary [animation-delay:-0.1s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </div>
  )
}

export default LoadingIndicator
