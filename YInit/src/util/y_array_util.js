export default  {
    /**
     * 更新数组,若item已存在则将其从数组中删除,若不存在则将其添加到数组
     * **/
    update_array : (array, item) => {
        for (let i = 0, len = array.length;
            i < len;
            i++) {
            let temp = array[ i ];
            if (item === temp) {
                array.splice(i, 1);
                return;
            }
        }
        array.push(item);
    },

    /**
     * 向数组中添加元素,若元素与存在则不添加
     * **/
    add : (array, item) => {
        if (!array) {
            return;
        }
        for (let i = 0, l = array.length;
            i < l;
            i++) {
            if (array === array[ i ]) {
                return;
            }
        }
        array.push(item);
    },

    /**
     * 将item插入数组中指定位置
     * **/
    insert_item_2_index : (array, index, item) => {
        array = array.splice(index, 0, item);
        return array;
    },

    /**
     * 将数组中指定元素移除
     * **/
    remove : (array, item) => {
        if (!array) {
            return;
        }
        for (let i = 0, l = array.length;
            i < l;
            i++) {
            if (item === array[ i ]) {
                array.splice(i, 1);
            }
        }
    },

    /**
     * 将数组中指定位置的元素移除
     * **/
    remove_item_by_index : (array, index) => {
        if (index < 0 || index >= array.length) {
            return array;
        } else {
            array = array.slice(0, index).concat(array.slice(index + 1, array.length));
            return array;
        }

    },

    /**
     * 将数组中指定元素(key字段对应相等的唯一项)移除
     * @param array
     * @param item
     * @param key_filed_name
     */
    remove_by_key_filed_name : (array, item, key_filed_name) => {
        if (!array) {
            return;
        }
        let index = -1;
        for (let i = 0, l = array.length;
            i < l;
            i++) {
            if (item[ key_filed_name ] === array[ i ][ key_filed_name ]) {
                array.splice(i, 1);
                return;
            }
        }
    },

    is_array_contains_item : (array, item) => {
        for (let i in
            array) {
            if (array[ i ] == item) {
                return true;
            }
        }
        return false;
    },

    /**
     * 判断数组中指定元素(key字段对应相等的唯一项)是否存在
     * @param array
     * @param item
     * @param key_filed_name
     */
    array_contains_item_by_key_filed_name : (array, item, key_filed_name) => {
        let index = -1;

        if (!array) {
            return index;
        }
        for (let i = 0, l = array.length;
            i < l;
            i++) {
            if (item[ key_filed_name ] == array[ i ][ key_filed_name ]) {
                return i;
            }
        }

        return index;
    },

    /**
     * clone 数组
     * @return Array 新的数组
     * */
    clone : (from) => {
        if (!from) {
            return [];
        }
        let ret_array = [];
        for (let i = 0, l = from.length;
            i < l;
            i++) {
            ret_array[ i ] = from[ i ];
        }
        return ret_array;
    },

    /**
     * 判断两个数组的是否相等
     * @return boolean true 数组长度相等且对应元素相等
     * */
    is_equal : (arr1, arr2) => {
        if (!(arr1 && arr2)) {
            return false;
        }
        if (arr1.length != arr2.length) {
            return false;
        }
        for (let i = 0, l = arr1.length;
            i < l;
            i++) {
            if (arr1[ i ] != arr2[ i ]) {
                return false;
            }
        }
        return true;
    },

    /**
     * 数组去重
     * @param arr   原数组
     * @returns {Array} 去重后的数组
     */
    deduplication : (arr) => {
        return Array.from(new Set(arr));
    },

    /**
     * 数组copy
     * @param arr   原数组
     * @returns {Array} 新数组
     */
    copy : (arr) => {
        return [ ...arr ];
    },

    /**
     * 数组清空数据
     * @param arr   原数组
     * @returns {Array} 清空后的数组
     */
    remove_all : (arr) => {
        return arr.splice(0, arr.length);
    },

    /**
     * 数组copy
     * @param arr   原数组
     * @returns {Array} 新数组
     */
    copy : (arr) => {
        return [ ...arr ];
    },

    /**
     * 将一组数值转为数组
     * // let arr2 = Array.of(1, 2, 3); // [1, 2, 3]
     * @param numbers   1, 2, 3
     * @returns {Array} [1, 2, 3]
     */
    numbers_2_array : (...numbers) => {
        return Array.of(...numbers);
    },

    add_item_2_arr_index_0 : (item, arr = []) => {
        let arr1 = [ item ];
        return arr1.concat(arr);
    },

    /**
     * 获取子数组从数组中，条件为开始下标以及结束下标
     * @param arr   数组
     * @param start 开始下标
     * @param end   结束下标
     * @returns {Array.<*>}
     */
    get_sub_arr_from_arr_with_start_and_end_index : (arr = [], start = 0, end = 0) => {
        return arr.slice(start, end);
    },

}