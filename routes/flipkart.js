const ads=[
    { 
        imageUrl:`https://rukminim1.flixcart.com/image/832/832/k51cpe80pkrrdj/headphone-refurbished/c/t/8/c-bassheads-100-boat-original-imafn4qttzkvzeyq.jpeg?q=70`,
        hrefUrl:'https://www.flipkart.com/boat-bassheads-100-wired-headset/p/itm6a33b1bcbfda9?pid=ACCF94NHDZAGWDS4&lid=LSTACCF94NHDZAGWDS4BFEZWJ&marketplace=FLIPKART&cmpid=content_headphone_10043474080_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,434904834931,,,,c,,,,,,,&gclid=Cj0KCQjw3s_4BRDPARIsAJsyoLOzrbQYpxI63SPhtzMXDIo9UBxLe6tsy6mIUj8NpR6WIH5alXhwdDkaAideEALw_wcB',
        cpi:2
    },
    {
        imageUrl:`https://rukminim1.flixcart.com/image/832/832/k0bbb0w0pkrrdj/headphone-refurbished/8/y/f/a-c50hiblu-jbl-original-imafhmzubkafgyzj.jpeg?q=70`,
        hrefUrl:'https://www.flipkart.com/jbl-c50hi-wired-headset/p/itm3b56d7f9439d3?pid=ACCFAMFQGCNEB8HM&lid=LSTACCFAMFQGCNEB8HMS8U8KK&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3AACCF94NHDZAGWDS4%3Bl%3ALSTACCF94NHDZAGWDS4BFEZWJ%3Bpt%3App%3Buid%3A0155ac94-fc96-df8e-554c-3ae7cde4b24b%3B.ACCFAMFQGCNEB8HM&ppt=pp&ppn=pp&ssid=znoyy0a1rk0000001595144328592&otracker=pp_reco_Similar%2BProducts_16_Similar%2BProducts_ACCFAMFQGCNEB8HM_productRecommendation%2Fsimilar_15&otracker1=pp_reco_NA_productRecommendation%2Fsimilar_Similar%2BProducts_DESKTOP_HORIZONTAL_productCard_cc_16_NA_view-all&cid=ACCFAMFQGCNEB8HM',
        cpi:3
    },
    {
        imageUrl:`https://rukminim1.flixcart.com/image/832/832/k0vbgy80pkrrdj/headphone/n/f/v/boat-bassheads-242-original-imafhbk3yngnzct2.jpeg?q=70`,
        hrefUrl:'https://www.flipkart.com/boat-bassheads-242-wired-headset/p/itmbd88b124ca8c2?pid=ACCFHBKEQGSQZN86&lid=LSTACCFHBKEQGSQZN86ATP0GT&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3AACCFAMFQGCNEB8HM%3Bl%3ALSTACCFAMFQGCNEB8HMS8U8KK%3Bpt%3App%3Buid%3A24b154a5-5b09-ac92-997c-1a981659d879%3B.ACCFHBKEQGSQZN86.LSTACCFHBKEQGSQZN86ATP0GT&ppt=pp&ppn=pp&ssid=znoyy0a1rk0000001595144328592&otracker=pp_reco_Similar%2BProducts_2_33.productCard.PMU_HORIZONTAL_Similar%2BProducts_ACCFHBKEQGSQZN86.LSTACCFHBKEQGSQZN86ATP0GT_productRecommendation%2Fsimilar_1&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_2_NA_view-all&cid=ACCFHBKEQGSQZN86.LSTACCFHBKEQGSQZN86ATP0GT',
        cpi:4
    }
]

module.exports=(req,res)=>{
    let adIndex=Math.floor(Math.random()*3)
    console.log(`Ad Index ${adIndex}`)
    res.status(200).json(ads[adIndex])
}