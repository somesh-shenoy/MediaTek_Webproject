const ads=[
    {
        imageUrl:`https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8192999/2019/2/15/3d5dd619-d072-4244-9192-7601a6b9dfd11550207667775-Blink-Play---Carbon-Black-Fitness-Earphones-8941550207666933-1.jpg`,
        hrefUrl:'https://www.myntra.com/headphones/blink/blink-play---carbon-black-fitness-earphones/8192999/buy',
        cpi:1,
        source:"myntra"
    },
    {
        imageUrl:`https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1950570/2017/6/7/11496821543323-Samsung-Unisex-Headphones-4761496821542469-1.jpg`,
        hrefUrl:'https://www.myntra.com/headphones/samsung/samsung-blue-level-u-bluetooth-in-ear-wireless-headphones/1950570/buy',
        cpi:5,
        source:"myntra"
    },
    {
        imageUrl:`https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/6794721/2018/7/4/5e6848f5-1a69-4f9f-9274-9269b4a8c07d1530699755809-boAt-Unisex-Headphones-5841530699755476-1.jpg`,
        hrefUrl:'https://www.myntra.com/headphones/boat/boat-rockerz-255-active-black-in-ear-wireless-headphones/6794721/buy',
        cpi:3,
        source:"myntra"
    }
]

module.exports=(req,res)=>{
    let adIndex=Math.floor(Math.random()*3)
    let selectedAd=ads[adIndex]
    console.log(`Ad CPI  ${selectedAd.cpi}  from ${selectedAd.source}`)
    res.status(200).json(selectedAd)
}