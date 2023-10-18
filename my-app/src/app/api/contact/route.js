import dbConn from "../../utils/dbcon";
import Contact from "../../models/contact";
import {NextResponse} from "next/server";


export async function POST(request, res) {
    try {

        const body = await request.json();
        await dbConn();

        const result=await Contact.create(body);
        console.log(result)

         return  NextResponse.json({
             message:"Message sent successfully!"
         }, {
             status: 200
         })

    }catch (e) {
         return  NextResponse.json(
             { error: "Server error, please try again!" },
             { status: 500 }
         )
    }
}