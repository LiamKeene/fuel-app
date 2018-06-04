exports.seed = (knex, Promise) => (
  knex("purchases").del()
    .then(() => (
      knex("purchases").insert([
        { id: 1, vehicle_id: 1, odometer: 182234.0, quantity: 23.45, filled: false, created_at: new Date(2018, 4, 27, 9, 22) },
        { id: 2, vehicle_id: 2, odometer: 43224, quantity: 15.00, filled: false, created_at: new Date(2018, 4, 30, 19, 8) },
        { id: 3, vehicle_id: 2, odometer: 43674, quantity: 55.61, filled: true, created_at: new Date(2018, 5, 9, 12, 09) },
        { id: 4, vehicle_id: 1, odometer: 182661.2, quantity: 35.67, filled: true, created_at: new Date(2018, 5, 14, 20, 45) },
        { id: 5, vehicle_id: 2, odometer: 44109, quantity: 53.88, filled: true, created_at: new Date(2018, 5, 22, 15, 13) },
        { id: 6, vehicle_id: 2, odometer: 44572, quantity: 56.08, filled: true, created_at: new Date(2018, 6, 2, 19, 37) },
        { id: 7, vehicle_id: 3, odometer: 5122, quantity: 20.00, filled: false, created_at: new Date(2018, 6, 3, 8, 11) },
        { id: 8, vehicle_id: 1, odometer: 183012.8, quantity: 31.93, filled: true, created_at: new Date(2018, 6, 4, 18, 51) },
      ])
    ))
)
