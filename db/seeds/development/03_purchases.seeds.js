exports.seed = (knex, Promise) => (
  knex("purchases").truncate()
    .then(() => (
      knex("vehicles").select("id")
    )).then(vehicles => (
      knex("purchases").insert([
        { vehicle_id: vehicles[0].id, odometer: 182234.0,  quantity: 23.45, filled: false,  created_at: new Date("2018-04-27 09:22") },
        { vehicle_id: vehicles[1].id, odometer: 43224,     quantity: 15.00, filled: false,  created_at: new Date("2018-04-30 19:08") },
        { vehicle_id: vehicles[1].id, odometer: 43674,     quantity: 55.61, filled: true,   created_at: new Date("2018-05-09 12:09") },
        { vehicle_id: vehicles[0].id, odometer: 182661.2,  quantity: 35.67, filled: true,   created_at: new Date("2018-05-14 20:45") },
        { vehicle_id: vehicles[1].id, odometer: 44109,     quantity: 53.88, filled: true,   created_at: new Date("2018-05-22 15:13") },
        { vehicle_id: vehicles[1].id, odometer: 44572,     quantity: 56.08, filled: true,   created_at: new Date("2018-06-02 19:37") },
        { vehicle_id: vehicles[2].id, odometer: 5122,      quantity: 20.00, filled: false,  created_at: new Date("2018-06-03 08:11") },
        { vehicle_id: vehicles[0].id, odometer: 183012.8,  quantity: 31.93, filled: true,   created_at: new Date("2018-06-04 18:51") },
      ])
    ))
)
