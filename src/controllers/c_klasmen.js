/* eslint-disable prettier/prettier */
const { getAllData, createData, getCountData } = require("../models/r_klasmen");
const wrapper = require("../utils/wrapper");

module.exports = {
  getAllData: async (request, response) => {
    try {
      // let { page, limit } = request.query;
      // page = +page;
      // limit = +limit;
      // const totalData = await getCountData();
      // const totalPage = Math.ceil(totalData / limit);
      // const pagination = { page, totalPage, limit, totalData };
      // const offset = page * limit - limit;
      // const result = await getAllData(offset, limit);
      const result = await getAllData();
      return wrapper.response(response, result.status, "Success Get Data !", result.data, pagination);
    } catch (error) {
      console.log(error);
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },

  // getSupplierbyId: async (request, response) => {
  //   const { id } = request.params;
  //   try {
  //     const result = await getSupplierbyId(id);
  //     if (result.data.length < 1) {
  //       wrapper.response(response, 404, `Data with ID '${id}' Not Found !`, null);
  //     }

  //     return wrapper.response(response, result.status, "Success Get Supplier by Id !", result.data);
  //   } catch (error) {
  //     const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
  //     return wrapper.response(response, status, statusText, errorData);
  //   }
  // },
  createData: async (request, response) => {
    try {
      const { klub, game, menang, seri, kalah, goal, kebobolan, point } = request.body;
      const setData = { klub, game, menang, seri, kalah, goal, kebobolan, point };
      const result = await createData(setData);

      return wrapper.response(response, result.status, "Success Create Data !", result.data);
    } catch (error) {
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
  // updateSupplier: async (request, response) => {
  //   try {
  //     const { nama_Supplier, alamat, noTelp } = request.body;
  //     const { id } = request.params;
  //     const setData = {
  //       nama_Supplier,
  //       alamat,
  //       noTelp,
  //     };
  //     const result = await updateSupplier(id, setData);
  //     if (result.data.length < 1) {
  //       wrapper.response(response, 404, `Data with ID '${id}' Not Found !`, null);
  //     }
  //     return wrapper.response(response, result.status, "Success Update Data !", result.data);
  //   } catch (error) {
  //     const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
  //     return wrapper.response(response, status, statusText, errorData);
  //   }
  // },
  // deleteSupplier: async (request, response) => {
  //   try {
  //     const { id } = request.params;
  //     const result = await deleteSupplier(id);
  //     if (result.data.length < 1) {
  //       wrapper.response(response, 404, `Data with ID '${id}' Not Found !`, null);
  //     }
  //     return wrapper.response(response, result.status, "Success Delete Data !", result.data);
  //   } catch (error) {
  //     const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
  //     return wrapper.response(response, status, statusText, errorData);
  //   }
  // },
};
