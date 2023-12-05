export type User = {
    token: string;
    acceptedCookies: boolean;

    name: string;
    lastName: string;
    telephone: string;
    email: string;
    shippingAddress: string;

    memberSince: string;
    newUser: boolean;
    userType: string;
    lastAccess: string;
    pastOrders: string[]; // or array of Order type if you have it
    activeOrders: string[]; // or array of Order type if you have it
    productReviews: { productId: string; review: string; rating: number }[]; // or array of ProductReview type if you have it
};
