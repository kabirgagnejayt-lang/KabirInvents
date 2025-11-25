export default function SupportPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-24 lg:py-32">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Support My Work
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          If you like what I do, consider buying me a coffee. Your support helps me keep creating and building new things!
        </p>
      </div>

      <div className="mt-12">
        <iframe 
          id='kofiframe' 
          src='https://ko-fi.com/kabirinvents/?hidefeed=true&widget=true&embed=true&preview=true' 
          style={{border: 'none', width: '100%', padding: '4px', background: '#f9f9f9', borderRadius: '1rem'}} 
          height='712' 
          title='kabirinvents'>
        </iframe>
      </div>
    </div>
  );
}
