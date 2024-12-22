import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-comic-background font-comic py-4 px-4 sm:py-6 sm:px-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="bg-comic-blue rounded-2xl overflow-hidden shadow-lg mb-6 sm:mb-10 border-4 border-comic-black">
          <div className="bg-comic-blue m-2 rounded-xl relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
            <div className="absolute inset-0 bg-halftone-dots opacity-10"></div>
            <div className="relative z-10 text-center">
              <div className="relative w-40 h-40 sm:w-60 sm:h-60 mx-auto mb-4">
              <Image
                  src="/img/madguy2.png"
                  alt="Mad Guy Logo"
                  width={800} // Replace with desired width
                  height={800} // Replace with desired height
                  className=""
                />

              </div>
              <h1 className="font-bangers text-6xl sm:text-7xl md:text-8xl mb-4 text-comic-red stroke-comic-black tracking-wider transform -rotate-2">
                Mad Guy
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-comic-blue comic-shadow text-white">fucking dev!</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-comic-blue comic-shadow mt-3 text-white">fuck i shouldn't have sold!</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-comic-blue comic-shadow mt-3 break-words text-white">
                contract: 13Ltbk5PkGjp72x7VkxPS8Vzu9WAcV6nY7bgcQAapump
              </p>
              <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-comic-blue comic-shadow mt-3 break-words text-white"><a href="https://x.com/madguy_onSol" target='_blank'>Twitter</a> | <a href="https://t.me/madguy_solana" target='_blank'>Telegram</a></p>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="bg-comic-yellow rounded-2xl overflow-hidden shadow-lg mb-6 sm:mb-10 border-4 border-comic-black">
          <div className="bg-comic-yellow m-2 rounded-xl py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
            <h2 className="font-bangers text-4xl sm:text-5xl text-comic-blue mb-6 sm:mb-8 text-center comic-shadow">
              What's Mad Guy?
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <p className="text-xl sm:text-2xl mb-4 font-bold text-comic-black">
                  Mad Guy resonates with meme coin degens.
                </p>
                <p className="text-lg sm:text-xl text-comic-black">
                  Should have bought, shouldn't have sold, should have sold, shouldn't have went to sleep! Mad Guy is the epitome of the meme coin experience. Its a meme for the culture
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <a href="https://t.me/madguymto" target='_blank' className="bg-comic-green text-comic-white text-2xl sm:text-3xl font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transform rotate-3 hover:rotate-0 transition-transform shadow-lg hover:shadow-xl border-4 border-comic-black">
                  Join the Madness! 🚀
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How to Buy Section */}
        <section className="bg-comic-red rounded-2xl overflow-hidden shadow-lg mb-6 sm:mb-10 border-4 border-comic-black">
          <div className="bg-comic-red m-2 rounded-xl relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
            <div className="absolute inset-0 bg-halftone-dots opacity-10"></div>
            <div className="relative z-10">
              <h2 className="font-bangers text-4xl text-white sm:text-5xl text-comic-red mb-8 sm:mb-12 text-center comic-shadow">
                How to Get Mad Guy
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {['Open or go download your phantom wallet', 'Get some Solana by using changenow.io to swap btc for solana', 'Swap Solana for Mad Guy, tell a friend!'].map((step, index) => (
                  <div key={index} className="bg-comic-yellow text-comic-black p-4 sm:p-6 rounded-lg transform rotate-2 hover:rotate-0 transition-transform border-4 border-comic-black shadow-lg">
                    <h3 className="font-bangers text-2xl sm:text-3xl mb-3 sm:mb-4 text-comic-red">Step {index + 1}</h3>
                    <p className="text-lg sm:text-xl font-bold">{step}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
        
        {/* Tokenomics Section */}
        <section className="bg-comic-purple rounded-2xl overflow-hidden shadow-lg mb-6 sm:mb-10 border-4 border-comic-black">
          <div className="bg-comic-purple m-2 rounded-xl relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
            <div className="absolute inset-0 bg-halftone-dots opacity-10"></div>
            <div className="relative z-10">
              <h2 className="font-bangers text-4xl sm:text-5xl text-white text-comic-purple mb-8 sm:mb-12 text-center comic-shadow">
                Mad Guy Tokenomics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-comic-green text-comic-black p-6 sm:p-8 rounded-lg transform rotate-3 hover:rotate-0 transition-transform border-4 border-comic-black shadow-lg">
                  <p className="text-3xl sm:text-4xl font-bold mb-2">1,000,000,000</p>
                  <p className="text-xl sm:text-2xl">Total Supply</p>
                </div>
                <div className="bg-comic-blue text-comic-white p-6 sm:p-8 rounded-lg transform -rotate-3 hover:rotate-0 transition-transform border-4 border-comic-black shadow-lg">
                  <p className="text-3xl sm:text-4xl font-bold mb-2">0% Buy / 0% Sell</p>
                  <p className="text-xl sm:text-2xl">Tax</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Links */}
        <section className="bg-comic-green rounded-2xl overflow-hidden shadow-lg border-4 border-comic-black mb-6">
          <div className="bg-comic-green m-2 rounded-xl relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
            <div className="absolute inset-0 bg-halftone-dots opacity-10"></div>
            <div className="relative z-10 text-center">
              <h2 className="font-bangers text-4xl sm:text-5xl text-comic-red mb-8 sm:mb-12 comic-shadow">
                Join the Mad Community
              </h2>
              <div className="flex justify-center space-x-4 sm:space-x-8">
                {[
                  { emoji: '🐦', color: 'bg-comic-blue', link:'https://x.com/madguy_onSol' },
                  { emoji: '💬', color: 'bg-comic-green',link:'https://t.me/madguy_solana' },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`${item.link}`}
                    className={`text-4xl sm:text-5xl md:text-6xl ${item.color} p-4 sm:p-6 rounded-full hover:scale-110 transition-transform border-4 border-comic-black shadow-lg`}
                  >
                    {item.emoji}
                  </a>
                ))}
              </div>
              <p>mad guy is a meme token with no intrinsic value and No promise of financial gains. Use as for crypto trading eduction purposes.</p>
            </div>
          </div>
        </section>
                {/* disclaimer */}
        
        <section className="bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-comic-black mt-6">
          <div className="bg-white m-2 rounded-xl relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
            <div className="absolute inset-0 bg-halftone-dots opacity-10"></div>
            <div className="relative z-10 text-center">
              <h2 className="font-bangers text-4xl sm:text-5xl text-white mb-8 sm:mb-12 comic-shadow">
                Disclaimer
              </h2>
              <div className="flex justify-center space-x-4 sm:space-x-8">
                <p className="mt-3">mad guy is a meme token with no intrinsic value and No promise of financial gains. Use for crypto trading eduction purposes. <br/><br/>copyright madguy.xyz 2024</p>

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}