
import pool from '@/app/libs/mtsql'

import { NextResponse } from "next/server";

// import { RowDataPacket } from "mysql2";

// DB_HOST = localhost
// DB_USER = 'root'
// DB_PASSWORD = '123456'
// DB_SCHEMA = 'test'

export async function GET() {
    try {
        const db = await pool.getConnection()
        // const rows = await db.execute<RowDataPacket[]>('select * from account')
        const query = 'select * from users'
        const [rows] = await db.execute(query)
        db.release()

        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}
