import { db } from "../db.js";

export const getAddresses = (_, res) => {
    const q = "SELECT * FROM address";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};