const ads=[
    {
        imageUrl:`https://n3.sdlcdn.com/imgs/i/z/y/SBS-Nine9-SH-12-Bluetooth-SDL335608323-1-14d53.jpeg`,
        hrefUrl:`https://www.snapdeal.com/product/sbs-nine9-sh12-bluetooth-over/621511952913`,
        cpi:1
    },
    {
        imageUrl:`https://n2.sdlcdn.com/imgs/i/4/2/Portronics-Muffs-Pro-Over-Ear-SDL446215776-1-82767.jpeg`,
        hrefUrl:`https://www.snapdeal.com/product/portronics-muffs-pro-over-ear/626225365377#bcrumbLabelId:288`,
        cpi:9
    },
    {
        imageUrl:`https://n3.sdlcdn.com/imgs/i/5/j/Woos-w17-Bluetooth-Headset-with-SDL520680253-1-5f2f0.jpeg`,
        hrefUrl:`https://www.snapdeal.com/product/woos-w17-bluetooth-headset-with/660162207684#bcrumbLabelId:288`,
        cpi:7
    }
]

module.exports=(req,res)=>{
    let adIndex=Math.floor(Math.random()*3)
    console.log(`Ad Index ${adIndex}`)
    res.status(200).json(ads[adIndex])
}