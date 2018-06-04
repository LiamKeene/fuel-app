exports.seed = (knex, Promise) => (
  knex("purchases").del()
    .then(() => (
      knex("purchases").insert([
        { id: 1, vehicle_id: 1, odometer: 182234.0,  quantity: 23.45, filled: false,  created_at: new Date("2018-04-27 09:22") },
        { id: 2, vehicle_id: 2, odometer: 43224,     quantity: 15.00, filled: false,  created_at: new Date("2018-04-30 19:08") },
        { id: 3, vehicle_id: 2, odometer: 43674,     quantity: 55.61, filled: true,   created_at: new Date("2018-05-09 12:09") },
        { id: 4, vehicle_id: 1, odometer: 182661.2,  quantity: 35.67, filled: true,   created_at: new Date("2018-05-14 20:45") },
        { id: 5, vehicle_id: 2, odometer: 44109,     quantity: 53.88, filled: true,   created_at: new Date("2018-05-22 15:13") },
        { id: 6, vehicle_id: 2, odometer: 44572,     quantity: 56.08, filled: true,   created_at: new Date("2018-06-02 19:37") },
        { id: 7, vehicle_id: 3, odometer: 5122,      quantity: 20.00, filled: false,  created_at: new Date("2018-06-03 08:11") },
        { id: 8, vehicle_id: 1, odometer: 183012.8,  quantity: 31.93, filled: true,   created_at: new Date("2018-06-04 18:51") },
      ])
    ))
)
