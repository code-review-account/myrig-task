 let converter = {
    getKgFromPounds: (pounds: number) => {
        const K = 0.453;
        return Math.round(+pounds*K);
    },
    getMetersFromFoots: (foots: string) => {
        const ft = 30.48;
        const inch = 2.54;
        const split = foots.split("'");
        const cm1 = +split[0]*ft;
        const cm2 = parseInt(split[1])*inch;
        const cm = Math.round(cm1 + cm2)

        return `${Math.floor(cm / 100)}м ${cm % 100}см`
    },


    getUSDfromEURO: (sum: number, rate: number) => {
        return Math.round(sum * rate)
    },

    getAgeFromTimeStamp: (timeStamp: number) => {
        const currentTime = new Date();
        const birthTime = new Date(timeStamp);

        let age = currentTime.getFullYear() - birthTime.getFullYear()
        let mth = currentTime.getMonth() - birthTime.getMonth();
        if (mth < 0 || (mth === 0 && currentTime.getDate() < birthTime.getDate())) {
            age --;
        }

        return age
    }
}

export default converter