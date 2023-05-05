import dbConn from '../../../utils/dbConn';
import Contact from '../../../models/contact';
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const body = await req.json();
		await dbConn();

		await Contact.create(body);

		return NextResponse.json(
			{
				message: 'Message sent successfully!',
			},
			{
				status: 200,
			}
		);
	} catch (e) {
		return NextResponse.json(
			{
				message: e.message,
			},
			{
				status: 500,
			}
		);
	}
}