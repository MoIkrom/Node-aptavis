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
  getAllClub: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("club")
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
  getKota: (kota) =>
    new Promise((resolve, reject) => {
      supabase
        .from("club")
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
  getKlub: (klub) =>
    new Promise((resolve, reject) => {
      supabase
        .from("club")
        .select("*")
        .eq("klub", klub)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
  createClub: (data) =>
    new Promise((resolve, reject) => {
      supabase
        .from("club")
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
