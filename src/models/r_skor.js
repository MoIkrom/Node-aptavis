const supabase = require("../config/supabase");

module.exports = {
  getCountClub: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("club")
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
  getAllScore: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("skor")
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
  getScore: (kota) =>
    new Promise((resolve, reject) => {
      supabase
        .from("skor")
        .select("*")
        .eq("kota", kota)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
  createScore: (data) =>
    new Promise((resolve, reject) => {
      supabase
        .from("skor")
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
