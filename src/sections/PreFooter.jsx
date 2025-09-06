
function PreFooter() {
  return (
    <section className="prefooter-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />
      
      <div className="h-[85vh] sm:pl-10 md:pl-20" style={{backgroundImage: "url('/images/preFooter.png')"}}>
        <div className="relative flex justify-center items-center sm:items-start flex-col h-full text-center sm:text-left text-milk">
          <div className="overflow-hidden">
            <h1 className="prefooter-title mt-10">Right Around</h1>
          </div>
          <div className="prefooter-text-scroll">
            <h1>The Corner</h1>
          </div>
          <div className="mt-20 md:mt-50">
            <p className="text-milk font-paragraph w-72 text-lg">Buy our drinks at your local store or get them delivered (to your door).</p>
          </div>
          <div className="prefooter-button mt-7 md:mt-10">
            <p>find in stores</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default PreFooter