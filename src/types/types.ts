// --current user--
export interface CurrentUserDataType {
    firebase_id?: string;
    fcm_token?: string;
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    gender: string;
    image: string;
    service_counter?: number;
    raking_status?: string;
    refferal_code?: string;
}

// --serach suggestion--
export interface SearchSuggestionDataType {
    id: number,
    name: string
}


// --main categoryData type--
export type categoryTypes = {
    id: number;
    cat_name: string;
    cat_slug: string;
    description: string;
    meta_title: string;
    meta_description: string;
    meta_keyword: string;
    cat_name_chinese: string;
    image: string;
    banner_video: string;
    footer: string | null
}


//--service data type--
export interface serviceTypes {
    id: number;
    cat_id: number;
    cat_slug: string;
    cat_name: string;
    cat_name_chinese: string;
    subcat_id: number;
    subcat_slug: string;
    subcat_name: string;
    subcat_name_chinese: string;
    ser_slug: string;
    meta_tag: string;
    ser_name: string;
    ser_name_chinese: string;
    price: number;
    image: string;
    banner_image: string;
    image_new?: (string)[] | null;
    video: string;
    description: string;
    description_chinese: string;
    rating?: string;
    count_rating?: string;
    favorite_status: number;
    threede_image?: null;
}

//--service category data type--
export interface serviceCategoryTypes {
    id: number;
    cat_id: number;
    subcat_name: string;
    subcat_name_chinese: string;
}


// --gallery data type--
export interface GalleryDataTypes {
    id: number;
    type: string;
    file?: (string)[] | null;
    name: string;
    cat_id: string;
    cat_name: string;
}


// -- address data type--
export interface AddressesDataTypes {
    id: number;
    users_id: string;
    house_no: string;
    street: string;
    post_code: string;
    area_city: string;
    state: string;
}

export interface AddressesDataFormTypes {

    users_id: string;
    house_no: string;
    street: string;
    post_code: string;
    area_city: string;
    state: string;
}


// --favourites data type
export interface FavouritesDataType {
    id: number;
    cat_id: number;
    cat_name: string;
    cat_slug: string;
    cat_name_chinese: string;
    subcat_id: number;
    subcat_name: string;
    subcat_slug: string;
    subcat_name_chinese: string;
    ser_id: number;
    ser_name: string;
    ser_slug: string;
    ser_name_chinese: string;
    price: number;
    image: string;
    banner_image: string;
    image_new?: (string)[] | null;
    video: string;
    description: string;
    description_chinese: string;
    rating?: null;
    count_rating?: null;
}

// --vouchers data type
export interface VoucherDataType {
    id: number;
    code: string;
    type: string;
    value: string;
    expire: string;
    coupon_limit: string;
    coupon_use: string;
    cat_name?: null;
    created_at: string;
}

// --ActivityDataType
export interface ActivityDataType {
    id: number;
    name: string;
    name_chinese: string;
    image: string;
    description: string;
    description_chinese: string;
    type: string;
    start_date: string;
    end_date: string;
}

// --instagramDataType
export interface InstagramDataType {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    thumbnail_url: string;
    permalink: string;
}

// --ServiceDetailsType
export interface ServiceDetailsType {
    id: number;
    cat_id: number;
    cat_slug: string;
    cat_name: string;
    cat_name_chinese: string;
    subcat_id: number;
    subcat_slug: string;
    subcat_name: string;
    subcat_name_chinese: string;
    ser_slug: string;
    meta_title: string;
    meta_description?: null;
    meta_keyword?: null;
    ser_name: string;
    ser_name_chinese: string;
    threede_image?: null;
    price: number;
    image?: (string)[] | null;
    video: string;
    description: string;
    description_chinese: string;
    rating?: null;
    count_rating?: null;
    favorite_status: number;
}


// --
export interface AdditionalServiceType {
    id: number;
    cat_id: number;
    subcat_id: number;
    sr_id: number;
    additional_ser_name: string;
    additional_ser_name_chinese: string;
    price: string;
}


// --PackagesDataType
export interface PackagesDataType {
    id: number;
    cat_id: number;
    cat_name: string;
    cat_name_chinese: string;
    subcat_id: number;
    subcat_name?: null;
    subcat_name_chinese?: null;
    sr_id: number;
    ser_name: string;
    ser_name_chinese: string;
    price: string;
    session: string;
    description: string;
    description_chinese: string;
    price_total: string;
    free_session: number;
}


// --ServiceBookDetailsTypes--
export interface ServiceBookDetailsTypes {
    ser_id: string;
    package_id: string;
    user_firebase_id: string;
    address_id: string;
    date: string;
    time: string;
    coupon_id: string;
    additional_service_id: { id: string, quantity: number }[] | [];
    wallet_amount: string;
    total_amount: number;
}

// --CouponDataType--
export interface CouponDataType {
    id: number;
    code: string;
    type: string;
    value: string;
    expire: string;
    created_at: string;
    coupon_limit: string;
    coupon_use: string;
    user_coupon_use: string;
}


// -update profile types--
export interface UpdateProfileFormTypes {
    id: string;
    firebase_id: string;
    fcm_token: string;
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    gender: string;
    image: string;
}


// ---- order data ---
export interface OrderDataType {
    id: number;
    user_firebase_id: string;
    cat_id: number;
    cat_name: string;
    cat_name_chinese: string;
    subcat_id: number;
    subcat_name: string;
    subcat_name_chinese: string;
    ser_id: number;
    ser_name: string;
    ser_name_chinese: string;
    ser_price: number;
    ser_image: string;
    ser_description: string;
    ser_description_chinese: string;
    order_status: string;
    date: string;
    time: string;
    rating?: null;
    review?: null;
    completed_session: number;
    invoice_no: string;
    payment_status: string;
    wallet_amount: number;
    packages?: null;
    coupon?: null;
    address: OrderAddressDataType;
    additional_services?: (OrderAdditionalServicesEntity)[] | null;
}
export interface OrderAddressDataType {
    id: number;
    house_no: string;
    street: string;
    post_code: string;
    area_city: string;
    state: string;
}
export interface OrderAdditionalServicesEntity {
    id: number;
    quantity: number;
    price: string;
    additional_ser_name: string;
    additional_ser_name_chinese: string;
}

export interface PaginateDataType {
    current_page: string;
    total_pages: number;
    total_rows: number;
    perPage: number;
}


// ----Review get---
export interface ReviewGetDataType {
    id: number;
    user_firebase_id: string;
    username: string;
    order_id: number;
    service: string;
    rating: number;
    review: string;
    created_at: string;
}


// ----reviews---
export interface ReviewDataType {
    id: number
    name: string
    image: string
    review: string
}