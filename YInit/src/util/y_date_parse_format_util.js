/**
 * Created by nick on 2017/4/26.
 */
import moment from "moment";

let y_date_parse_format_util = {

    //13位时间戳
    format_date_Long_or_String_2_String_second_13(date){
        return this.format_date_Long_or_String_2_String_with_patten(Number(date), 'YYYY-MM-DD HH:mm:ss');
    },
    format_date_Long_or_String_2_String_minute_13(date){
        return this.format_date_Long_or_String_2_String_with_patten(Number(date), 'YYYY-MM-DD HH:mm');
    },

    format_date_Long_or_String_2_String_from_month_2_minute_13(date){
        return this.format_date_Long_or_String_2_String_with_patten(Number(date), 'MM月DD日 HH:mm');
    },

    format_date_2_Long_10(date){
        let date_Long = date.getTime();

        return (date_Long - (date_Long % 1000)) / 1000;
    },

    get_current_time_Long_10(){
        let ct = this.get_current_time_Long_13();
        ct = (ct - ct % 1000) / 1000;
        return ct;
    },

    get_current_time_Long_13(){
        let ct = new Date().getTime();
        return ct;
    },

    get_current_time_moment(){
        return moment(new Date());
    },

    // //moment("2015-08-20T00:00:00+08:00"); //ok
    // parseString_2_Long(dateString){
    //     return moment(dateString);
    // },

    /**
     * moment("1970-01-01 8:00", "YYYY-MM-DD HH:mm") //ok
     * @param dateString
     * @param pattenString
     * @returns {number} 13位
     */
    parse_String_2_Long_with_patten(dateString, pattenString){
        let _moment = moment(dateString, pattenString);
        let tlong = _moment.valueOf();
        return tlong;
    },

    //10位时间戳
    format_date_Long_or_String_2_String_second_Long_10(date_Long10){
        let date = date_Long10 * 1000;
        return this.format_date_Long_or_String_2_String_with_patten(date, 'YYYY-MM-DD HH:mm:ss');
    },
    format_date_Long_or_String_2_String_minute_Long_10(date_Long10){
        let date = date_Long10 * 1000;
        return this.format_date_Long_or_String_2_String_with_patten(date, 'YYYY-MM-DD HH:mm');
    },
    format_date_Long_or_String_2_String_hour_Long_10(date_Long10){
        let date = date_Long10 * 1000;
        return this.format_date_Long_or_String_2_String_with_patten(date, 'YYYY-MM-DD HH');
    },
    format_date_Long_or_String_2_String_day_Long_10(date_Long10){
        let date = date_Long10 * 1000;
        return this.format_date_Long_or_String_2_String_with_patten(date, 'YYYY-MM-DD');
    },

    //13位时间戳
    format_date_Long_or_String_2_String_second(date){
        return this.format_date_Long_or_String_2_String_with_patten(date, 'YYYY-MM-DD HH:mm:ss');
    },
    format_date_Long_or_String_2_String_minute(date){
        return this.format_date_Long_or_String_2_String_with_patten(date, 'YYYY-MM-DD HH:mm');
    },
    format_date_Long_or_String_2_String_hour(date){
        return this.format_date_Long_or_String_2_String_with_patten(date, 'YYYY-MM-DD HH');
    },
    format_date_Long_or_String_2_String_day(date){
        return this.format_date_Long_or_String_2_String_with_patten(date, 'YYYY-MM-DD');
    },

    format_date_Long_or_String_2_String_hour_minute(date){
        return this.format_date_Long_or_String_2_String_with_patten(date, 'HH:mm');
    },
    format_date_Long_or_String_2_String_with_patten(date, pattenString){
        return moment(date).format(pattenString);
    },
    format_date_Long_or_String_2_String_day_the_first_day_of_the_month(date){
        return this.format_date_Long_or_String_2_String_day(moment(date).date(1));

    },

    format_date_Long_or_String_2_String_MDY(date){
        return this.format_date_Long_or_String_2_String_with_patten(date, 'MM/DD/YYYY');
    },

    test11(date){
        return this.format_date_Long_or_String_2_String_day(moment(date).date(1));

    },

};

export default y_date_parse_format_util;