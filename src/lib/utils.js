class Utils {

    static getYoutubeVideoId(url){
        var regExp = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
        var match = regExp.exec(url);
        if(match != null) {
            return match[3];
        } else {
            return false;
        }
    }

}

export default Utils;