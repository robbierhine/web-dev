

// function changeImage() {

//     document.getElementById("image1").src = "asb_fw08_detail1_look1.jpeg";
// }


const imageGroups = {
    "image1": {
        main: "ASB_FW08_OPENING_FINALE.jpeg",
        details: ["ASB_FW08_OPENING_FINALE_1.jpeg"]
    },

    "image3": {
        main: "ann_sofie_back_aw08_3.jpeg",
        details: ["asb_fw08_detail1_look2.jpeg"]
    },

    "image5": {
        main: "ann_sofie_back_aw08.jpeg",
        details: ["asb_fw08_detail1_look1.jpeg"]
    },

    "image6": {
        main: "ann_sofie_back_aw08_6.jpeg",
        details: ["asb_fw08_detail1_look6.jpeg", "asb_fw08_detail2_look6.jpeg"]
    },

    "image7": {
        main: "ann_sofie_back_aw08_7.jpeg",
        details: ["asb_fw08_detail1_look7.jpeg"]
    },

    "image8": {
        main: "ann_sofie_back_aw08_8.jpeg",
        details: ["asb_fw08_detail1_look8.jpeg", "asb_fw08_detail2_look8.jpeg"]
    },

    "image9": {
        main: "ann_sofie_back_aw08_9.jpeg",
        details: ["asb_fw08_detail1_look9.jpeg", "asb_fw08_detail2_look9.jpeg"]
    },

    "image10": {
        main: "ann_sofie_back_aw08_10.jpeg",
        details: ["asb_fw08_detail1_look10.jpeg"]
    },

    "image11": {
        main: "ann_sofie_back_aw08_11.jpeg",
        details: ["asb_fw08_detail1_look11.jpeg"]
    },

    "image12": {
        main: "ann_sofie_back_aw08_12.jpeg",
        details: ["asb_fw08_detail1_look12.jpeg"]
    },

    "image13": {
        main: "ann_sofie_back_aw08_13.jpeg",
        details: ["asb_fw08_detail1_look13.jpeg", "asb_fw08_detail2_look13.jpeg"]
    },

    "image14": {
        main: "ann_sofie_back_aw08_14.jpeg",
        details: ["asb_fw08_detail1_look14.jpeg"]
    },

    "image15": {
        main: "ann_sofie_back_aw08_15.jpeg",
        details: ["asb_fw08_detail1_look15.jpeg"]
    },

    "image16": {
        main: "ann_sofie_back_aw08_16.jpeg",
        details: ["asb_fw08_detail1_look16.jpeg", "asb_fw08_detail2_look16.jpeg"]
    },


    "image17": {
        main: "ann_sofie_back_aw08_17.jpeg",
        details: ["asb_fw08_detail1_look17.jpeg"]
    },

    "image18": {
        main: "ann_sofie_back_aw08_18.jpeg",
        details: ["asb_fw08_detail2_look18.jpeg"]
    },

    "image19": {
        main: "ann_sofie_back_aw08_19.jpeg",
        details: ["asb_fw08_detail1_look19.jpeg", "asb_fw08_detail2_look19.jpeg"]
    },

    "image20": {
        main: "ann_sofie_back_aw08_20.jpeg",
        details: ["asb_fw08_detail1_look20.jpeg", "asb_fw08_detail2_look20.jpeg"]
    },

    "image21": {
        main: "ann_sofie_back_aw08_21.jpeg",
        details: ["asb_fw08_detail1_look21.jpeg"]
    },

    "image22": {
        main: "ann_sofie_back_aw08_22.jpeg",
        details: ["asb_fw08_detail1_look22.jpeg"]
    },

    "image23": {
        main: "ann_sofie_back_aw08_23.jpeg",
        details: ["asb_fw08_detail1_look23.jpeg"]
    },

    "image24": {
        main: "ann_sofie_back_aw08_24.jpeg",
        details: ["asb_fw08_detail1_look24.jpeg", "asb_fw08_detail2_look24.jpeg"]
    },

    "image25": {
        main: "ann_sofie_back_aw08_25.jpeg",
        details: ["asb_fw08_detail1_look25.jpeg"]
    },

    "image26": {
        main: "ann_sofie_back_aw08_26.jpeg",
        details: ["asb_fw08_detail1_look26.jpeg"]
    },

    "image27": {
        main: "ann_sofie_back_aw08_27.jpeg",
        details: ["asb_fw08_detail1_look27.jpeg", "asb_fw08_detail2_look27.jpeg"]
    },

    "image28": {
        main: "ann_sofie_back_aw08_28.jpeg",
        details: ["asb_fw08_detail1_look28.jpeg"]
    },

    "image29": {
        main: "ann_sofie_back_aw08_29.jpeg",
        details: ["asb_fw08_detail1_look29.jpeg", "asb_fw08_detail2_look29.jpeg"]
    },

    "image30": {
        main: "ann_sofie_back_aw08_30.jpeg",
        details: ["asb_fw08_detail1_look30.jpeg", "asb_fw08_detail2_look30.jpeg"]
    },
};

const currentIndexes = {};

for (let key in imageGroups) {
    currentIndexes[key] = -1; 
}

function changeImage(imageId) { 
    let imgElement = document.getElementById(imageId);
    let group = imageGroups[imageId];

    

    currentIndexes[imageId] = (currentIndexes[imageId] + 1) % (group.details.length + 1);

    if (currentIndexes[imageId] === group.details.length) {
        imgElement.src = group.main; 
        currentIndexes[imageId] = -1; 
    } else {
        imgElement.src = group.details[currentIndexes[imageId]];
    }
}
