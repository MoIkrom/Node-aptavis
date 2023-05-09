const supabase = require("../config/supabase");

module.exports = {
  getCountData: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("klasmen")
        .select("*", { count: "exact" })
        .then((result) => {
          if (!result.error) {
            resolve(result.count);
          } else {
            reject(result);
          }
        });
    }),

  // AllSupplier: () =>
  //   new Promise((resolve, reject) => {
  //     supabase
  //       .from("supplier")
  //       .select("*")
  //       .order("created_at", { ascending: false })
  //       .then((result) => {
  //         if (!result.error) {
  //           resolve(result);
  //         } else {
  //           reject(result);
  //         }
  //       });
  //   }),
  getAllData: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("klasmen")
        .select("*")
        .order("created_at", { ascending: false })
        // .range(offset, offset + limit - 1)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
  // getSupplierbyId: (id) =>
  //   new Promise((resolve, reject) => {
  //     supabase
  //       .from("supplier")
  //       .select("*")
  //       .eq("id", id)
  //       .then((result) => {
  //         if (!result.error) {
  //           resolve(result);
  //         } else {
  //           reject(result);
  //         }
  //       });
  //   }),
  createData: (data) =>
    new Promise((resolve, reject) => {
      supabase
        .from("klasmen")
        .insert([data])
        .select()
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
  // updateSupplier: (id, data) =>
  //   new Promise((resolve, reject) => {
  //     supabase
  //       .from("supplier")
  //       .update(data)
  //       .select()
  //       .eq("id", id)
  //       .then((result) => {
  //         if (!result.error) {
  //           resolve(result);
  //         } else {
  //           reject(result);
  //         }
  //       });
  //   }),
  // deleteSupplier: (id) =>
  //   new Promise((resolve, reject) => {
  //     supabase
  //       .from("supplier")
  //       .delete()
  //       .select()
  //       .eq("id", id)
  //       .then((result) => {
  //         if (!result.error) {
  //           resolve(result);
  //         } else {
  //           reject(result);
  //         }
  //       });
  //   }),
};
