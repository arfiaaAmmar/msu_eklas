import { RoomBookingRouteType } from "./config";

export const roomsRoute: RoomBookingRouteType[] = [
    {
        department: "account",
        children: [
            {
                id: "account_room1",
                name: "Room 1",
                department: 'account',
                images: [
                    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                ]
            }, 
            {
                id: "account_room2",
                name: "Room 2",
                department: 'account',
                images: [
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg"       
                ]
            },
        ]
    },
    {
        department: "library",
        children: [
            {
                id: "library_room1",
                name: "Room 1",
                department: 'library',
                images: [
                    "https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg"       
                ]
            },
            {
                id: "library_room2",
                name: "Room 2",
                department: 'library',
                images: [
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                    "https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg",
                ]
            },
            {
                id: "library_room3",
                name: "Room 3",
                department: 'library',
                images: [
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                    "https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg"       
                ]
            }
        ]
    },  
    {
        department: "counselling",
        children: [
            {
                id: "counselling_room1",
                name: "Room 1",
                department: 'counselling',
                images: [
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg"       
                ]
            },
            {
                id: "counselling_room2",
                name: "Room 2",
                department: 'counselling',
                images: [
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
                    "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg"       
                ]
            }
        ]
    },
]