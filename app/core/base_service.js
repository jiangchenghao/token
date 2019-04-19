// "use strict";
// const Service = require("egg").Service;

// class BaseService extends Service {
//   isEmpty(data) {
//     if (
//       data === undefined ||
//       data === null ||
//       data === false ||
//       data === "" ||
//       data.toString() === "NaN" ||
//       JSON.stringify(data) == "{}" ||
//       JSON.stringify(data) == "[]"
//     ) {
//       return true;
//     }else {
//       return false;
//     }
//   }
//   success(data) {
//     return {
//       errno: this.config.CODE.SUCCESS.errno,
//       errmsg: "成功",
//       data: data || ""
//     };
//   }
//   fail(resultEnum, data, message) {
//     let obj;
//     if (typeof resultEnum == "object") {
//       obj = {
//         errno: resultEnum.errno,
//         errmsg: message !== undefined && message !== "" ? message : resultEnum.errmsg,
//         data: data || ""
//       };
//     } else {
//       obj = {
//         errno: resultEnum,
//         errmsg: data,
//         data: message
//       };
//     }
//     return obj;
//   }
// }
// module.exports = BaseService;
