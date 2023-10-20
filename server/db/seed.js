const { randAvatar } = require("@ngneat/falso");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const taskers = [
	{
		// id: 1,
		fName: "John",
		lName: "Miller",
		email: "johnmiller@gmail.com",
		password: "test",
		phone: "917-555-9898",
	},
	{
		// id: 2,
		fName: "Calvin",
		lName: "Johnson",
		email: "calvinjohnson@gmail.com",
		password: "test",
		phone: "874-456-9834",
	},
	{
		// id: 3,
		fName: "Kevin",
		lName: "Borger",
		email: "kevinborger@gmail.com",
		password: "test",
		phone: "784-345-9874",
	},
	{
		// id: 4,
		fName: "Garrett",
		lName: "Goldberg",
		email: "garrettgoldberg@gmail.com",
		password: "test",
		phone: "917-567-9865",
	},
	{
		// id: 5,
		fName: "Shaheer",
		lName: "Finkle",
		email: "shaheerfinkle@gmail.com",
		password: "test",
		phone: "342-987-4563",
	},
	{
		// id: 6,
		fName: "Chris",
		lName: "Jones",
		email: "chrisjones@gmail.com",
		password: "test",
		phone: "435-097-3658",
	},
	{
		// id: 7,
		fName: "Luke",
		lName: "Smith",
		email: "lukesmith@gmail.com",
		password: "test",
		phone: "567-987-8973",
	},
	{
		// id: 8,
		fName: "Emma",
		lName: "Kravitz",
		email: "emmakravtiz@gmail.com",
		password: "test",
		phone: "473-753-8964",
	},
	{
		// id: 9,
		fName: "Sara",
		lName: "Phillips",
		email: "saraphillips@gmail.com",
		password: "test",
		phone: "555-987-4572",
	},
	{
		// id: 10,
		fName: "Krista",
		lName: "Rich",
		email: "kristarich@gmail.com",
		password: "test",
		phone: "895-463-9090",
	},
];

const taskees = [
	{
		// id: 1,
		fName: "John",
		lName: "Doe",
		email: "john.doe@example.com",
		phone: "123-456-7890",
		city: "New York",
		photo: randAvatar(),
		state: "NY",
		password: "test",
	},
	{
		// id: 2,
		fName: "Jane",
		lName: "Smith",
		email: "jane.smith@example.com",
		phone: "987-654-3210",
		city: "Los Angeles",
		photo: randAvatar(),
		state: "CA",
		password: "test",
	},
	{
		// id: 3,
		fName: "Michael",
		lName: "Johnson",
		email: "michael.j@example.com",
		phone: "555-555-5555",
		city: "Chicago",
		photo: randAvatar(),
		state: "IL",
		password: "test",
	},
	{
		// id: 4,
		fName: "Sarah",
		lName: "Brown",
		email: "sarah.b@example.com",
		phone: "333-333-3333",
		photo: randAvatar(),
		city: "Houston",
		state: "TX",
		password: "test",
	},
	{
		// id: 5,
		fName: "David",
		lName: "Lee",
		email: "david.lee@example.com",
		phone: "222-222-2222",
		photo: randAvatar(),
		city: "Miami",
		state: "FL",
		password: "test",
	},
	{
		// id: 6,
		fName: "Emily",
		lName: "Wilson",
		email: "emily.w@example.com",
		phone: "777-777-7777",
		photo: randAvatar(),
		city: "San Francisco",
		state: "CA",
		password: "test",
	},
	{
		// id: 7,
		fName: "Robert",
		lName: "Taylor",
		email: "robert.t@example.com",
		phone: "999-999-9999",
		photo: randAvatar(),
		city: "Boston",
		state: "MA",
		password: "test",
	},
	{
		// id: 8,
		fName: "Megan",
		lName: "Hall",
		email: "megan.h@example.com",
		phone: "444-444-4444",
		photo: randAvatar(),
		city: "Seattle",
		state: "WA",
		password: "test",
	},
	{
		// id: 9,
		fName: "William",
		lName: "Wilson",
		email: "william.w@example.com",
		phone: "666-666-6666",
		photo: randAvatar(),
		city: "Denver",
		state: "CO",
		password: "test",
	},
	{
		// id: 10,
		fName: "Linda",
		lName: "Martinez",
		email: "linda.m@example.com",
		phone: "888-888-8888",
		photo: randAvatar(),
		city: "Dallas",
		state: "TX",
		password: "test",
	},
];

const taskeeReviews = [
	{
		taskeeId: 1,
		rating: 4,
		text: "Great service! Very satisfied.",
		date: "2023-10-12T08:30:00Z",
	},
	{
		taskeeId: 2,
		rating: 2,
		text: "Average experience. Could be better.",
		date: "2023-10-12T09:15:00Z",
	},
	{
		taskeeId: 3,
		rating: 5,
		text: "Exceptional service. Highly recommend.",
		date: "2023-10-12T10:20:00Z",
	},
	{
		taskeeId: 4,
		rating: 3,
		text: "Satisfactory job. Room for improvement.",
		date: "2023-10-12T11:45:00Z",
	},
	{
		taskeeId: 5,
		rating: 1,
		text: "Terrible experience. Avoid at all costs.",
		date: "2023-10-12T12:10:00Z",
	},
	{
		taskeeId: 6,
		rating: 3,
		text: "Decent service. Not great, not terrible.",
		date: "2023-10-12T13:30:00Z",
	},
	{
		taskeeId: 7,
		rating: 4,
		text: "Good job. Will hire again.",
		date: "2023-10-12T14:20:00Z",
	},
	{
		taskeeId: 8,
		rating: 5,
		text: "Outstanding work! Exceeded my expectations.",
		date: "2023-10-12T15:45:00Z",
	},
	{
		taskeeId: 9,
		rating: 2,
		text: "Not satisfied with the service. Needs improvement.",
		date: "2023-10-12T16:10:00Z",
	},
	{
		taskeeId: 10,
		rating: 1,
		text: "Worst service ever. Avoid this tasker.",
		date: "2023-10-12T17:30:00Z",
	},
	{
		taskeeId: 1,
		rating: 4,
		text: "Great service! Very satisfied.",
		date: "2023-10-12T18:45:00Z",
	},
	{
		taskeeId: 2,
		rating: 2,
		text: "Average experience. Could be better.",
		date: "2023-10-12T19:20:00Z",
	},
	{
		taskeeId: 3,
		rating: 5,
		text: "Exceptional service. Highly recommend.",
		date: "2023-10-12T20:30:00Z",
	},
	{
		taskeeId: 4,
		rating: 3,
		text: "Satisfactory job. Room for improvement.",
		date: "2023-10-12T21:55:00Z",
	},
	{
		taskeeId: 5,
		rating: 1,
		text: "Terrible experience. Avoid at all costs.",
		date: "2023-10-12T22:15:00Z",
	},
	{
		taskeeId: 6,
		rating: 3,
		text: "Decent service. Not great, not terrible.",
		date: "2023-10-12T23:35:00Z",
	},
	{
		taskeeId: 7,
		rating: 4,
		text: "Good job. Will hire again.",
		date: "2023-10-12T00:25:00Z",
	},
	{
		taskeeId: 8,
		rating: 5,
		text: "Outstanding work! Exceeded my expectations.",
		date: "2023-10-12T01:50:00Z",
	},
	{
		taskeeId: 9,
		rating: 2,
		text: "Not satisfied with the service. Needs improvement.",
		date: "2023-10-12T02:15:00Z",
	},
	{
		taskeeId: 10,
		rating: 1,
		text: "Worst service ever. Avoid this tasker.",
		date: "2023-10-12T03:35:00Z",
	},
	{
		taskeeId: 1,
		rating: 4,
		text: "Great service! Very satisfied.",
		date: "2023-10-12T04:45:00Z",
	},
	{
		taskeeId: 2,
		rating: 2,
		text: "Average experience. Could be better.",
		date: "2023-10-12T05:20:00Z",
	},
	{
		taskeeId: 3,
		rating: 5,
		text: "Exceptional service. Highly recommend.",
		date: "2023-10-12T06:30:00Z",
	},
	{
		taskeeId: 4,
		rating: 3,
		text: "Satisfactory job. Room for improvement.",
		date: "2023-10-12T07:55:00Z",
	},
	{
		taskeeId: 5,
		rating: 1,
		text: "Terrible experience. Avoid at all costs.",
		date: "2023-10-12T08:15:00Z",
	},
	{
		taskeeId: 6,
		rating: 3,
		text: "Decent service. Not great, not terrible.",
		date: "2023-10-12T09:35:00Z",
	},
	{
		taskeeId: 7,
		rating: 4,
		text: "Good job. Will hire again.",
		date: "2023-10-12T10:25:00Z",
	},
	{
		taskeeId: 8,
		rating: 5,
		text: "Outstanding work! Exceeded my expectations.",
		date: "2023-10-12T11:50:00Z",
	},
	{
		taskeeId: 9,
		rating: 2,
		text: "Not satisfied with the service. Needs improvement.",
		date: "2023-10-12T12:15:00Z",
	},
	{
		taskeeId: 10,
		rating: 1,
		text: "Worst service ever. Avoid this taskee.",
		date: "2023-10-12T13:35:00Z",
	},
];

const taskerReviews = [
	{
		taskerId: 1,
		rating: 5,
		text: "Excellent job! Highly recommended!",
		date: "2023-10-12T08:00:00Z",
	},
	{
		taskerId: 2,
		rating: 3,
		text: "Good work, but could improve in some areas.",
		date: "2023-10-12T09:15:00Z",
	},
	{
		taskerId: 3,
		rating: 4,
		text: "Satisfied with the service provided.",
		date: "2023-10-12T10:30:00Z",
	},
	{
		taskerId: 4,
		rating: 2,
		text: "Not a great experience. Room for improvement.",
		date: "2023-10-12T11:45:00Z",
	},
	{
		taskerId: 5,
		rating: 1,
		text: "Terrible service. Would not recommend.",
		date: "2023-10-12T13:00:00Z",
	},
	{
		taskerId: 6,
		rating: 3,
		text: "Average job. Expected better.",
		date: "2023-10-12T14:15:00Z",
	},
	{
		taskerId: 7,
		rating: 4,
		text: "Satisfied with the service provided.",
		date: "2023-10-12T15:30:00Z",
	},
	{
		taskerId: 8,
		rating: 5,
		text: "Exceptional work! Would hire again.",
		date: "2023-10-12T16:45:00Z",
	},
	{
		taskerId: 9,
		rating: 2,
		text: "Not up to the mark. Disappointing.",
		date: "2023-10-12T18:00:00Z",
	},
	{
		taskerId: 10,
		rating: 5,
		text: "Outstanding service! Highly recommended!",
		date: "2023-10-12T19:15:00Z",
	},
	{
		taskerId: 1,
		rating: 4,
		text: "Good job overall. Thank you!",
		date: "2023-10-12T20:30:00Z",
	},
	{
		taskerId: 2,
		rating: 3,
		text: "Could improve in certain areas.",
		date: "2023-10-12T21:45:00Z",
	},
	{
		taskerId: 3,
		rating: 2,
		text: "Not entirely satisfied with the service.",
		date: "2023-10-12T23:00:00Z",
	},
	{
		taskerId: 4,
		rating: 5,
		text: "Exceptional work! Highly recommended!",
		date: "2023-10-13T00:15:00Z",
	},
	{
		taskerId: 5,
		rating: 1,
		text: "Terrible service. Would not recommend.",
		date: "2023-10-13T01:30:00Z",
	},
	{
		taskerId: 6,
		rating: 4,
		text: "Satisfied with the service provided.",
		date: "2023-10-13T02:45:00Z",
	},
	{
		taskerId: 7,
		rating: 3,
		text: "Average job. Expected better.",
		date: "2023-10-13T04:00:00Z",
	},
	{
		taskerId: 8,
		rating: 5,
		text: "Outstanding service! Highly recommended!",
		date: "2023-10-13T05:15:00Z",
	},
	{
		taskerId: 9,
		rating: 2,
		text: "Not up to the mark. Disappointing.",
		date: "2023-10-13T06:30:00Z",
	},
	{
		taskerId: 10,
		rating: 4,
		text: "Satisfactory service. Could be better.",
		date: "2023-10-13T07:45:00Z",
	},
	{
		taskerId: 1,
		rating: 3,
		text: "Decent service, but room for improvement.",
		date: "2023-10-13T08:00:00Z",
	},
	{
		taskerId: 2,
		rating: 4,
		text: "Good job. Satisfied with the work done.",
		date: "2023-10-13T09:15:00Z",
	},
	{
		taskerId: 3,
		rating: 5,
		text: "Excellent service! Highly recommended!",
		date: "2023-10-13T10:30:00Z",
	},
	{
		taskerId: 4,
		rating: 2,
		text: "Disappointed with the quality of work.",
		date: "2023-10-13T11:45:00Z",
	},
	{
		taskerId: 5,
		rating: 1,
		text: "Terrible experience. Avoid at all costs.",
		date: "2023-10-13T13:00:00Z",
	},
	{
		taskerId: 6,
		rating: 3,
		text: "Average service. Nothing exceptional.",
		date: "2023-10-13T14:15:00Z",
	},
	{
		taskerId: 7,
		rating: 4,
		text: "Satisfied with the service provided.",
		date: "2023-10-13T15:30:00Z",
	},
	{
		taskerId: 8,
		rating: 5,
		text: "Outstanding work! Will hire again.",
		date: "2023-10-13T16:45:00Z",
	},
	{
		taskerId: 9,
		rating: 2,
		text: "Not up to my expectations. Disappointing.",
		date: "2023-10-13T18:00:00Z",
	},
	{
		taskerId: 10,
		rating: 4,
		text: "Satisfactory service. Could be better.",
		date: "2023-10-13T19:15:00Z",
	},
];

const categories = [
	{
		id: 1,
		categoryName: "Handyman",
		image:
			"https://www.work4youlaw.com/wp-content/uploads/2014/06/Handyman-accidents.jpg",
	},
	{
		id: 2,
		categoryName: "Moving Services",
		image:
			"https://www.usnews.com/dims4/USNEWS/be2ed29/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F97%2Fa9%2F30d751a044c29bb00bead735dee8%2F211005-moving-company-stock-stock.jpg",
	},
	{
		id: 3,
		categoryName: "Furniture Assembly",
		image:
			"https://goloadup.com/wp-content/uploads/2021/09/furniture-assembly-professionals.jpg",
	},
	{
		id: 4,
		categoryName: "Mounting & Installation",
		image:
			"https://i.shgcdn.com/b1a569d5-a35f-4a4a-ba75-b623e2dc6ac2/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
	},
	{
		id: 5,
		categoryName: "Cleaning",
		image:
			"https://progressivecleaningcorp.com/wp-content/uploads/2023/06/Deep-Cleaners-In-Alexandria-VA.jpg",
	},
	{
		id: 6,
		categoryName: "Shopping + Delivery",
		image:
			"https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/deliverystockart.jpg?itok=zxIk7wTp",
	},
	{
		id: 7,
		categoryName: "Yardwork Services",
		image:
			"https://yardcare.toro.com/wp-content/uploads/2017/03/Header-Timemaster.jpg",
	},
	{
		id: 8,
		categoryName: "Contactless Tasks",
		image:
			"https://anyline.com/app/uploads/2020/11/shutterstock_1707290242.jpg",
	},
	{
		id: 9,
		categoryName: "Office Services",
		image:
			"https://www.loffler.com/hubfs/9%20Office%20Services%20to%20Let%20Someone%20Else%20Manage%20Loffler%20Companies%20billboard-2.jpg",
	},
	{
		id: 10,
		categoryName: "Virtual & Online Tasks",
		image:
			"https://wellkeptwallet.com/wp-content/uploads/person-using-laptop-wearing-a-watch-and-coffee-nearby.jpg",
	},
];

const subcategories = [
	{
		id: 1,
		categoryId: 1,
		subName: "Home Repairs",
		image:
			"https://img.freepik.com/free-photo/man-woman-assembling-bed_23-2147782393.jpg?w=2000&t=st=1697745070~exp=1697745670~hmac=f01fbb8043e4bbf6414e3af787257cdf33cc65eac9eec006d62bfca2382b07e5",
	},
	{
		id: 2,
		categoryId: 1,
		subName: "Plumbing",
		image:
			"https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?w=2000&t=st=1697745112~exp=1697745712~hmac=9449dedbcc1298f1de5587c944809c1ec4e34f1fa5ff4924cc47850f6a87b4da",
	},
	{
		id: 3,
		categoryId: 2,
		subName: "Heavy Lifting",
		image:
			"https://img.freepik.com/free-photo/man-carrying-cardboard-boxes-warehouse_107420-96565.jpg?w=996&t=st=1697745175~exp=1697745775~hmac=0ab378d7205eb7e5096635ae67fa873d74969ab9caf7e2a7033bc9afbd35126b",
	},
	{
		id: 4,
		categoryId: 2,
		subName: "Packing Services",
		image:
			"https://img.freepik.com/free-photo/closeup-delivery-man-closing-carboard-box-with-tape-while-preparing-packages-shipment_637285-2244.jpg?w=2000&t=st=1697745198~exp=1697745798~hmac=05d5511c304cb7593547065e532930bb81e0c6baa5225d98e38cfaf145aa988c",
	},
	{
		id: 5,
		categoryId: 3,
		subName: "Desk Assembly",
		image:
			"https://img.freepik.com/free-photo/good-looking-young-man-building-himself-new-wooden-shelf-doing-some-diy-home-renovations_662251-617.jpg?w=1380&t=st=1697745226~exp=1697745826~hmac=07ba59a9e1152eb6943521bbcaefa5191ae3cf3ee3771d354e12cf07ec7fdbe3",
	},
	{
		id: 6,
		categoryId: 3,
		subName: "Bed Assembly",
		image:
			"https://img.freepik.com/free-photo/young-man-holding-mattress-bedroom_839833-2670.jpg?w=2000&t=st=1697745249~exp=1697745849~hmac=aa546d48e7ad9c54d4f188df1235c009b24613692a99bdfe16849c8f3593ae32",
	},
	{
		id: 7,
		categoryId: 4,
		subName: "TV Mounting",
		image:
			"https://img.freepik.com/free-photo/tv-hanged-wall-indoors_23-2149026088.jpg?w=2000&t=st=1697745297~exp=1697745897~hmac=0766398689a7dfd6057b6b276bc0daea9f38bd04146962560e46c0d207954c01",
	},
	{
		id: 8,
		categoryId: 4,
		subName: "Hang Pictures",
		image:
			"https://img.freepik.com/free-photo/empty-photo-frames-wall_74190-10006.jpg?w=2000&t=st=1697745321~exp=1697745921~hmac=d0f5ab71ab0e90aa1deed3d60135d9436e502634d90f6edf9ecdf48597120166",
	},
	{
		id: 9,
		categoryId: 5,
		subName: "Deep Cleaning",
		image:
			"https://img.freepik.com/free-photo/professional-cleaning-service-person-using-steam-cleaner-office_23-2150520636.jpg?w=2000&t=st=1697745362~exp=1697745962~hmac=749490f7ce90849d8bfc729c1126eb0e936b32d8af6999c2fc6dde3966dc51c6",
	},
	{
		id: 10,
		categoryId: 5,
		subName: "Car Washing",
		image:
			"https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg?w=2000&t=st=1697745388~exp=1697745988~hmac=3721b5bde7a0b992adaa5a61de05c9634261efc9eff18625113df6df318067fb",
	},
	{
		id: 11,
		categoryId: 6,
		subName: "Groceries",
		image:
			"https://img.freepik.com/free-photo/food-cart_1098-14618.jpg?w=2000&t=st=1697745413~exp=1697746013~hmac=df5f5f62ff5a93d89a61b55172eb24c4673efda0bf6932739d0dd71c6a6575a3",
	},
	{
		id: 12,
		categoryId: 6,
		subName: "Wait in Line",
		image:
			"https://i.ytimg.com/vi/_mXvIe0IIRc/maxresdefault.jpg",
	},
	{
		id: 13,
		categoryId: 7,
		subName: "Lawn Mowing",
		image:
			"https://img.freepik.com/free-photo/female-legs-woman-using-lawn-mower_651396-1545.jpg?w=2000&t=st=1697745510~exp=1697746110~hmac=47da4a160e266a78182bd069fa8e97db0e53dfa835176b8fc3ead4bea75b35fa",
	},
	{
		id: 14,
		categoryId: 7,
		subName: "Hedge Trimming",
		image:
			"https://img.freepik.com/free-photo/old-gardener-cuts-bush-with-large-metal-old-pruning-shears_169016-10698.jpg?w=2000&t=st=1697745532~exp=1697746132~hmac=41cf5a6ca7db7f85a6778fc0b8302be81a91a30e3103ebbdb03f5331cff98678",
	},
	{
		id: 15,
		categoryId: 8,
		subName: "Contactless Delivery",
		image:
			"https://seattlerefined.com/resources/media/05e9e67b-7258-402f-91ef-c6ea29766c00-large16x9_GettyImages1214610802.jpg?1587770959840",
	},
	{
		id: 16,
		categoryId: 8,
		subName: "Running Your Errands",
		image:
			"https://img.freepik.com/free-photo/happy-beautiful-woman-with-colorful-shopping-bags-hand-cheerfully-jumping-air_231208-11913.jpg?w=2000&t=st=1697745600~exp=1697746200~hmac=ccb92c642fd67e30fe966ec8e2dec8290b6a0c279756b316cd448ce4d714deff",
	},
	{
		id: 17,
		categoryId: 9,
		subName: "Office Tech Setup",
		image:
			"https://img.freepik.com/free-photo/no-people-office-with-multiple-computers-customer-service-desk-call-center-helpline-support-give-telecommunication-assistance-empty-helpdesk-with-client-telephony-reception_482257-44009.jpg?w=1380&t=st=1697745621~exp=1697746221~hmac=00650f64b145a2497a481ef0bc0b808eafcf309c62f83643b7ccbd761aa76f4a",
	},
	{
		id: 18,
		categoryId: 9,
		subName: "Office Interior Design",
		image:
			"https://img.freepik.com/free-photo/modern-interior-design-office_181624-21578.jpg?w=2000&t=st=1697745643~exp=1697746243~hmac=d3a983b55f886a82e1a773fbf129c78fd7891b216044bcc6fedfe57a627c09c7",
	},
	{
		id: 19,
		categoryId: 10,
		subName: "Virtual Assistant",
		image:
			"https://img.freepik.com/free-photo/portrait-female-work-having-video-call_23-2148902302.jpg?w=2000&t=st=1697745662~exp=1697746262~hmac=5ad2ac650f18b30157c7e79dde64a851b8b859aafcf7c1b526b15ebd91840c84",
	},
	{
		id: 20,
		categoryId: 10,
		subName: "Data Entry",
		image:
			"https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?w=2000&t=st=1697745684~exp=1697746284~hmac=c4c2018e5162f1b647d5c67811d689f304dafbed99a4a2801f7214e2bc3974a5",
	},
];

const skills = [
	{
		taskeeId: 1,
		subcategoryId: 1,
		price: 4565,
		experience: "Worked as a carpenter for 5 years",
	},
	{
		taskeeId: 1,
		subcategoryId: 5,
		price: 4565,
		experience: "Have assembled over 50 IKEA items",
	},
	{
		taskeeId: 1,
		subcategoryId: 10,
		price: 4565,
		experience: "Operated a car wash business for 10 years",
	},
	{
		taskeeId: 2,
		subcategoryId: 2,
		price: 5500,
		experience: "I have repaired 30 leaks in my career",
	},
	{
		taskeeId: 2,
		subcategoryId: 6,
		price: 5500,
		experience: "Assembled over 10 billion bed frames",
	},
	{
		taskeeId: 2,
		subcategoryId: 11,
		price: 5500,
		experience: "Worked for Insta Cart for over a century",
	},
	{
		taskeeId: 3,
		subcategoryId: 1,
		price: 7000,
		experience: "Pretty good at fixing things",
	},
	{
		taskeeId: 3,
		subcategoryId: 5,
		price: 7000,
		experience: "Pretty good at assembling furniture",
	},
	{
		taskeeId: 3,
		subcategoryId: 10,
		price: 7000,
		experience: "Set up a local car wash for charity",
	},
	{
		taskeeId: 4,
		subcategoryId: 2,
		price: 4550,
		experience: "I'm a faulty sink's worst nightmare",
	},
	{
		taskeeId: 4,
		subcategoryId: 11,
		price: 4550,
		experience:
			"Picked up groceries for my family for the last 5 years",
	},
	{
		taskeeId: 4,
		subcategoryId: 6,
		price: 4550,
		experience: "I am a board certified bed assembler",
	},
	{
		taskeeId: 5,
		subcategoryId: 3,
		price: 2450,
		experience: "I can deadlift 600lbs",
	},
	{
		taskeeId: 5,
		subcategoryId: 7,
		price: 2450,
		experience: "Worked in lawn care for 7 years",
	},
	{
		taskeeId: 5,
		subcategoryId: 12,
		price: 2450,
		experience:
			"Had to replace my driver's license 4 times... spent a lot of time at the DMV",
	},
	{
		taskeeId: 6,
		subcategoryId: 3,
		price: 2150,
		experience: "2 time Mr. Olympia",
	},
	{
		taskeeId: 6,
		subcategoryId: 7,
		price: 2150,
		experience: "I own my own lawn care company",
	},
	{
		taskeeId: 6,
		subcategoryId: 12,
		price: 2150,
		experience:
			"I wait in line overnight every black friday",
	},
	{
		taskeeId: 7,
		subcategoryId: 4,
		price: 3250,
		experience: "Worked at amazon warehouse for 3 years",
	},
	{
		taskeeId: 7,
		subcategoryId: 8,
		price: 3250,
		experience: "I have hung A LOT of pictures in my life",
	},
	{
		taskeeId: 7,
		subcategoryId: 13,
		price: 3250,
		experience:
			"I've mowed my own lawn every week for the past 8 years",
	},
	{
		taskeeId: 8,
		subcategoryId: 4,
		price: 2750,
		experience: "I love boxes and tape",
	},
	{
		taskeeId: 8,
		subcategoryId: 8,
		price: 2750,
		experience:
			"Won best picture hanging competition 3 years in a row",
	},
	{
		taskeeId: 8,
		subcategoryId: 13,
		price: 2750,
		experience:
			"With my help the grass will be greener on the other side",
	},
	{
		taskeeId: 9,
		subcategoryId: 9,
		price: 6750,
		experience: "I will powerwash the inside of your house",
	},
	{
		taskeeId: 9,
		subcategoryId: 14,
		price: 6750,
		experience: "Over 5 years experience trimming hedges",
	},
	{
		taskeeId: 9,
		subcategoryId: 15,
		price: 6750,
		experience:
			"Delivered for door dash all throughout covid",
	},
	{
		taskeeId: 10,
		subcategoryId: 9,
		price: 9050,
		experience: "Worked for a cleaning company for 4 years",
	},
	{
		taskeeId: 10,
		subcategoryId: 14,
		price: 9050,
		experience: "Won 2017 best hedges award",
	},
	{
		taskeeId: 10,
		subcategoryId: 15,
		price: 9050,
		experience: "I will ensure speedy delivery",
	},
	{
		taskeeId: 1,
		subcategoryId: 16,
		price: 2300,
		experience: "I was a personal assistant for 15 years",
	},
	{
		taskeeId: 9,
		subcategoryId: 16,
		price: 5050,
		experience:
			"I have worked in the errand business for 5 years",
	},
	{
		taskeeId: 7,
		subcategoryId: 17,
		price: 6750,
		experience: "Worked in I.T. for 8 years",
	},
	{
		taskeeId: 10,
		subcategoryId: 17,
		price: 4550,
		experience: "Set up home offices for over 50 clients",
	},
	{
		taskeeId: 6,
		subcategoryId: 18,
		price: 4050,
		experience:
			"I own a interior design company with over 100 satisfied clients",
	},
	{
		taskeeId: 3,
		subcategoryId: 18,
		price: 6000,
		experience:
			"Head of interior design for a large real estate company",
	},
	{
		taskeeId: 2,
		subcategoryId: 19,
		price: 3050,
		experience: "Worked as a remote assistant for 15 years",
	},
	{
		taskeeId: 5,
		subcategoryId: 19,
		price: 8050,
		experience:
			"Proficient in personal support and technology",
	},
	{
		taskeeId: 7,
		subcategoryId: 20,
		price: 1750,
		experience: "Worked as a data analyst for 5 years",
	},
	{
		taskeeId: 9,
		subcategoryId: 10,
		price: 9050,
		experience:
			"Can create a macro for automatic data entry",
	},
];

const tasks = [
	{
		taskerId: 1,
		description: "I need my window screens fixed",
		subcategoryId: 1,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 1,
		isAssigned: false,
		startingStreet: "123 Main St",
		startingCity: "Springfield",
		startingState: "CA",
		startingZip: "12345",
		startingSuite: "Apt 101",
		endingStreet: "123 Main St",
		endingCity: "Springfield",
		endingState: "CA",
		endingZip: "12345",
		endingSuite: "Apt 101",
	},
	{
		taskerId: 2,
		description:
			"I have a leaking sink that i need repaired",
		subcategoryId: 2,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 2,
		isAssigned: false,
		startingStreet: "456 Elm St",
		startingCity: "Oakville",
		startingState: "NY",
		startingZip: "54321",
		startingSuite: "Suite 200",
		endingStreet: "456 Elm St",
		endingCity: "Oakville",
		endingState: "NY",
		endingZip: "54321",
		endingSuite: "Suite 200",
	},
	{
		taskerId: 3,
		description:
			"I need my couch moved down 3 flights of stairs",
		subcategoryId: 3,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 1,
		isAssigned: false,
		startingStreet: "789 Maple Ave",
		startingCity: "Willow Creek",
		startingState: "TX",
		startingZip: "67890",
		startingSuite: "Unit 303",
		endingStreet: "789 Maple Ave",
		endingCity: "Willow Creek",
		endingState: "TX",
		endingZip: "67890",
		endingSuite: "Unit 303",
	},
	{
		taskerId: 4,
		description:
			"I have around 30 boxes of stuff that needs to be packed",
		subcategoryId: 4,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 3,
		isAssigned: false,
		startingStreet: "101 Pine Rd",
		startingCity: "Riverdale",
		startingState: "FL",
		startingZip: "98765",
		startingSuite: "Office 12",
		endingStreet: "101 Pine Rd",
		endingCity: "Riverdale",
		endingState: "FL",
		endingZip: "98765",
		endingSuite: "Office 12",
	},
	{
		taskerId: 5,
		description: "I need a large IKEA desk assembled",
		subcategoryId: 5,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 2,
		isAssigned: false,
		startingStreet: "234 Oak Lane",
		startingCity: "Hillsboro",
		startingState: "OR",
		startingZip: "45678",
		startingSuite: "Apt 405",
		endingStreet: "234 Oak Lane",
		endingCity: "Hillsboro",
		endingState: "OR",
		endingZip: "45678",
		endingSuite: "Apt 405",
	},
	{
		taskerId: 6,
		description:
			"I have a king size bed frame that I need assembled",
		subcategoryId: 6,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 3,
		isAssigned: false,
		startingStreet: "567 Willow Ave",
		startingCity: "Birmingham",
		startingState: "AL",
		startingZip: "34567",
		startingSuite: "Suite 101",
		endingStreet: "567 Willow Ave",
		endingCity: "Birmingham",
		endingState: "AL",
		endingZip: "34567",
		endingSuite: "Suite 101",
	},
	{
		taskerId: 7,
		description: 'I need an 85" TV mounted',
		subcategoryId: 7,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 2,
		isAssigned: false,
		startingStreet: "890 Cedar Rd",
		startingCity: "Columbus",
		startingState: "OH",
		startingZip: "23456",
		startingSuite: "Unit 202",
		endingStreet: "890 Cedar Rd",
		endingCity: "Columbus",
		endingState: "OH",
		endingZip: "23456",
		endingSuite: "Unit 202",
	},
	{
		taskerId: 8,
		description:
			"I have around 15 pictures I need to be hung",
		subcategoryId: 8,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 1,
		isAssigned: false,
		startingStreet: "345 Birch Blvd",
		startingCity: "Portland",
		startingState: "ME",
		startingZip: "76543",
		startingSuite: "Office 33",
		endingStreet: "345 Birch Blvd",
		endingCity: "Portland",
		endingState: "ME",
		endingZip: "76543",
		endingSuite: "Office 33",
	},
	{
		taskerId: 9,
		description:
			"I have a 4 bedroom 2 bath house I need to be thoroughly cleaned",
		subcategoryId: 9,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 4,
		isAssigned: false,
		startingStreet: "678 Elmwood Dr",
		startingCity: "Phoenix",
		startingState: "AZ",
		startingZip: "54321",
		startingSuite: "Apt 205",
		endingStreet: "678 Elmwood Dr",
		endingCity: "Phoenix",
		endingState: "AZ",
		endingZip: "54321",
		endingSuite: "Apt 205",
	},
	{
		taskerId: 10,
		description: "I have 3 cars I need washed",
		subcategoryId: 10,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 3,
		isAssigned: false,
		startingStreet: "456 Maple Lane",
		startingCity: "Seattle",
		startingState: "WA",
		startingZip: "12345",
		startingSuite: "Suite 300",
		endingStreet: "456 Maple Lane",
		endingCity: "Seattle",
		endingState: "WA",
		endingZip: "12345",
		endingSuite: "Suite 300",
	},
	{
		taskerId: 1,
		description:
			"I need a someone to get groceries for a family of 5",
		subcategoryId: 11,
		isCompleted: false,
		vehicleRequired: true,
		estTimeCommitment: 2,
		isAssigned: false,
		startingStreet: "661 Logan St",
		startingCity: "denver",
		startingState: "CO",
		startingZip: "80203",
		startingSuite: "Suite 1",
		endingStreet: "789 Birch Rd",
		endingCity: "Denver",
		endingState: "CO",
		endingZip: "98765",
		endingSuite: "Unit 10",
	},
	{
		taskerId: 2,
		description:
			"I need someone to wait in line at the DMV for me",
		subcategoryId: 12,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 2,
		isAssigned: false,
		startingStreet: "234 Cedar Ave",
		startingCity: "Austin",
		startingState: "TX",
		startingZip: "34567",
		startingSuite: "Office 22",
		endingStreet: "234 Cedar Ave",
		endingCity: "Austin",
		endingState: "TX",
		endingZip: "34567",
		endingSuite: "Office 22",
	},
	{
		taskerId: 3,
		description: "I need someone mow my 10 acres of lawn",
		subcategoryId: 13,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 10,
		isAssigned: false,
		startingStreet: "567 Pine Lane",
		startingCity: "New York",
		startingState: "NY",
		startingZip: "67890",
		startingSuite: "Apt 303",
		endingStreet: "567 Pine Lane",
		endingCity: "New York",
		endingState: "NY",
		endingZip: "67890",
		endingSuite: "Apt 303",
	},
	{
		taskerId: 4,
		description: "I want my hedges to look majestic",
		subcategoryId: 14,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 3,
		isAssigned: false,
		startingStreet: "101 Oak Blvd",
		startingCity: "Los Angeles",
		startingState: "CA",
		startingZip: "45678",
		startingSuite: "Suite 15",
		endingStreet: "101 Oak Blvd",
		endingCity: "Los Angeles",
		endingState: "CA",
		endingZip: "45678",
		endingSuite: "Suite 15",
	},
	{
		taskerId: 5,
		description:
			"I need my prescription picked up from CVS and left in my mailbox",
		subcategoryId: 15,
		isCompleted: false,
		vehicleRequired: true,
		estTimeCommitment: 1,
		isAssigned: false,
		startingStreet: "344 W Hubbard St",
		startingCity: "Chicago",
		startingState: "IL",
		startingZip: "60654",
		startingSuite: "Suite 1",
		endingStreet: "123 Elmwood Dr",
		endingCity: "Chicago",
		endingState: "IL",
		endingZip: "76543",
		endingSuite: "Unit 5",
	},
	{
		taskerId: 6,
		description: "I need someone to pick up my laundry",
		subcategoryId: 16,
		isCompleted: false,
		vehicleRequired: true,
		estTimeCommitment: 1,
		isAssigned: false,
		startingStreet: "456 Cedar Lane",
		startingCity: "San Francisco",
		startingState: "CA",
		startingZip: "23456",
		startingSuite: "Office 28",
		endingStreet: "456 Cedar Lane",
		endingCity: "San Francisco",
		endingState: "CA",
		endingZip: "23456",
		endingSuite: "Office 28",
	},
	{
		taskerId: 7,
		description:
			"Need someone to set up office wifi and computers",
		subcategoryId: 17,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 4,
		isAssigned: false,
		startingStreet: "789 Pine Rd",
		startingCity: "Miami",
		startingState: "FL",
		startingZip: "54321",
		startingSuite: "Apt 405",
		endingStreet: "789 Pine Rd",
		endingCity: "Miami",
		endingState: "FL",
		endingZip: "54321",
		endingSuite: "Apt 405",
	},
	{
		taskerId: 8,
		description:
			"I need my office redesigned and more funkshway",
		subcategoryId: 18,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 2,
		isAssigned: false,
		startingStreet: "234 Main St",
		startingCity: "Dallas",
		startingState: "TX",
		startingZip: "12345",
		startingSuite: "Suite 7",
		endingStreet: "234 Main St",
		endingCity: "Dallas",
		endingState: "TX",
		endingZip: "12345",
		endingSuite: "Suite 7",
	},
	{
		taskerId: 9,
		description:
			"I need someone to schedule 3 meetings for me",
		subcategoryId: 19,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 2,
		isAssigned: false,
		startingStreet: "567 Oak Lane",
		startingCity: "Las Vegas",
		startingState: "NV",
		startingZip: "98765",
		startingSuite: "Unit 16",
		endingStreet: "567 Oak Lane",
		endingCity: "Las Vegas",
		endingState: "NV",
		endingZip: "98765",
		endingSuite: "Unit 16",
	},
	{
		taskerId: 10,
		description:
			"I have over 5,000 data points I need put into excel",
		subcategoryId: 20,
		isCompleted: false,
		vehicleRequired: false,
		estTimeCommitment: 5,
		isAssigned: false,
		startingStreet: "890 Elm Ave",
		startingCity: "Philadelphia",
		startingState: "PA",
		startingZip: "34567",
		startingSuite: "Office 42",
		endingStreet: "890 Elm Ave",
		endingCity: "Philadelphia",
		endingState: "PA",
		endingZip: "34567",
		endingSuite: "Office 42",
	},
];

async function main() {
	salt_rounds = 5;
	await Promise.all(
		taskers.map(async (tasker) => {
			const hashedPassword = await bcrypt.hash(
				tasker.password,
				salt_rounds
			);
			return prisma.tasker.create({
				data: {
					id: tasker.id,
					fName: tasker.fName,
					lName: tasker.lName,
					email: tasker.email,
					password: hashedPassword,
					phone: tasker.phone,
				},
			});
		})
	);
	await Promise.all(
		taskees.map(async (taskee) => {
			const hashedPassword = await bcrypt.hash(
				taskee.password,
				salt_rounds
			);
			return prisma.taskee.create({
				data: {
					id: taskee.id,
					fName: taskee.fName,
					lName: taskee.lName,
					email: taskee.email,
					phone: taskee.phone,
					city: taskee.city,
					photo: taskee.photo,
					state: taskee.state,
					password: hashedPassword,
				},
			});
		})
	);
	await Promise.all(
		taskeeReviews.map(async (review) => {
			return prisma.taskeeReview.create({
				data: {
					taskeeId: review.taskeeId,
					rating: review.rating,
					text: review.text,
					date: review.date,
				},
			});
		})
	);
	await Promise.all(
		taskerReviews.map(async (review) => {
			return prisma.taskerReview.create({
				data: {
					taskerId: review.taskerId,
					rating: review.taskerId,
					text: review.text,
					date: review.date,
				},
			});
		})
	);
	await Promise.all(
		categories.map(async (category) => {
			return prisma.category.create({
				data: {
					id: category.id,
					categoryName: category.categoryName,
					image: category.image,
				},
			});
		})
	);
	await Promise.all(
		subcategories.map(async (subcategory) => {
			return prisma.subcategory.create({
				data: {
					id: subcategory.id,
					categoryId: subcategory.categoryId,
					subName: subcategory.subName,
					image: subcategory.image,
				},
			});
		})
	);
	await Promise.all(
		skills.map(async (skill) => {
			return prisma.skills.create({
				data: {
					taskeeId: skill.taskeeId,
					subcategoryId: skill.subcategoryId,
					price: skill.price,
					experience: skill.experience,
				},
			});
		})
	);
	await Promise.all(
		tasks.map(async (task) => {
			return prisma.task.create({
				data: {
					taskerId: task.taskerId,
					description: task.description,
					subcategoryId: task.subcategoryId,
					isCompleted: task.isCompleted,
					vehicleRequired: task.vehicleRequired,
					estTimeCommitment: task.estTimeCommitment,
					isAssigned: task.isAssigned,
					startingStreet: task.startingStreet,
					startingCity: task.startingCity,
					startingState: task.startingState,
					startingZip: task.startingZip,
					startingSuite: task.startingSuite,
					endingStreet: task.endingStreet,
					endingCity: task.endingCity,
					endingState: task.endingState,
					endingZip: task.endingZip,
					endingSuite: task.endingSuite,
				},
			});
		})
	);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
