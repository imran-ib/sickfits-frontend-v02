import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  fetch_format?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  angle?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  underlay?: Maybe<Scalars['String']>;
  default_image?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_space?: Maybe<Scalars['String']>;
  dpr?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  transformation?: Maybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsHash: Scalars['String'];
  customViewsHash?: Maybe<Scalars['String']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden',
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden',
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  endSession: Scalars['Boolean'];
};

export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationCreateProductArgs = {
  data?: Maybe<ProductCreateInput>;
};

export type MutationCreateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsCreateInput>>>;
};

export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};

export type MutationUpdateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsUpdateInput>>>;
};

export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteProductsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationCreateProductImageArgs = {
  data?: Maybe<ProductImageCreateInput>;
};

export type MutationCreateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesCreateInput>>>;
};

export type MutationUpdateProductImageArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductImageUpdateInput>;
};

export type MutationUpdateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesUpdateInput>>>;
};

export type MutationDeleteProductImageArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteProductImagesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};

export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
};

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH',
}

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  TokenNotSet = 'TOKEN_NOT_SET',
  TokenMismatch = 'TOKEN_MISMATCH',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED',
}

export enum PasswordResetRequestErrorCode {
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
}

/**  A keystone list  */
export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImage>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

/**  A keystone list  */
export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
};

export type ProductImageCreateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<ProductRelateToOneInput>;
};

export type ProductImageRelateToOneInput = {
  create?: Maybe<ProductImageCreateInput>;
  connect?: Maybe<ProductImageWhereUniqueInput>;
  disconnect?: Maybe<ProductImageWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProductImageUpdateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<ProductRelateToOneInput>;
};

export type ProductImageWhereInput = {
  AND?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText?: Maybe<Scalars['String']>;
  altText_not?: Maybe<Scalars['String']>;
  altText_contains?: Maybe<Scalars['String']>;
  altText_not_contains?: Maybe<Scalars['String']>;
  altText_starts_with?: Maybe<Scalars['String']>;
  altText_not_starts_with?: Maybe<Scalars['String']>;
  altText_ends_with?: Maybe<Scalars['String']>;
  altText_not_ends_with?: Maybe<Scalars['String']>;
  altText_i?: Maybe<Scalars['String']>;
  altText_not_i?: Maybe<Scalars['String']>;
  altText_contains_i?: Maybe<Scalars['String']>;
  altText_not_contains_i?: Maybe<Scalars['String']>;
  altText_starts_with_i?: Maybe<Scalars['String']>;
  altText_not_starts_with_i?: Maybe<Scalars['String']>;
  altText_ends_with_i?: Maybe<Scalars['String']>;
  altText_not_ends_with_i?: Maybe<Scalars['String']>;
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  product?: Maybe<ProductWhereInput>;
  product_is_null?: Maybe<Scalars['Boolean']>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ProductImagesCreateInput = {
  data?: Maybe<ProductImageCreateInput>;
};

export type ProductImagesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductImageUpdateInput>;
};

export type ProductRelateToOneInput = {
  create?: Maybe<ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<ProductWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProductUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<Maybe<ProductWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  photo?: Maybe<ProductImageWhereInput>;
  photo_is_null?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_i?: Maybe<Scalars['String']>;
  status_not_i?: Maybe<Scalars['String']>;
  status_contains_i?: Maybe<Scalars['String']>;
  status_not_contains_i?: Maybe<Scalars['String']>;
  status_starts_with_i?: Maybe<Scalars['String']>;
  status_not_starts_with_i?: Maybe<Scalars['String']>;
  status_ends_with_i?: Maybe<Scalars['String']>;
  status_not_ends_with_i?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  price?: Maybe<Scalars['Int']>;
  price_not?: Maybe<Scalars['Int']>;
  price_lt?: Maybe<Scalars['Int']>;
  price_lte?: Maybe<Scalars['Int']>;
  price_gt?: Maybe<Scalars['Int']>;
  price_gte?: Maybe<Scalars['Int']>;
  price_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ProductsCreateInput = {
  data?: Maybe<ProductCreateInput>;
};

export type ProductsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Product list.  */
  _ProductsMeta?: Maybe<_ListMeta>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ProductImage list.  */
  _ProductImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  keystone: KeystoneMeta;
};

export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryAllProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type Query_AllProductsMetaArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryAllProductImagesArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type Query_AllProductImagesMetaArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>;
};

export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export enum SortProductImagesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  ProductAsc = 'product_ASC',
  ProductDesc = 'product_DESC',
}

export enum SortProductsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PhotoAsc = 'photo_ASC',
  PhotoDesc = 'photo_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC',
  MagicAuthIssuedAtAsc = 'magicAuthIssuedAt_ASC',
  MagicAuthIssuedAtDesc = 'magicAuthIssuedAt_DESC',
  MagicAuthRedeemedAtAsc = 'magicAuthRedeemedAt_ASC',
  MagicAuthRedeemedAtDesc = 'magicAuthRedeemedAt_DESC',
}

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordSuccess
  | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_not?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_not?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_not?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_lt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_lte?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_gt?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_gte?: Maybe<Scalars['String']>;
  magicAuthIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_not?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_lt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_lte?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_gt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_gte?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  magicAuthRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};

export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaFieldsInput = {
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  key?: Maybe<Scalars['String']>;
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars['Boolean']>;
};

export type AllProductQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
}>;

export type AllProductQuery = { __typename?: 'Query' } & {
  allProducts?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Product' } & Pick<
          Product,
          'id' | 'name' | 'price' | 'description' | 'status'
        > & {
            photo?: Maybe<
              { __typename?: 'ProductImage' } & Pick<ProductImage, 'id'> & {
                  image?: Maybe<
                    { __typename?: 'CloudinaryImage_File' } & Pick<
                      CloudinaryImage_File,
                      'id' | 'publicUrlTransformed'
                    >
                  >;
                }
            >;
          }
      >
    >
  >;
};

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ProductQuery = { __typename?: 'Query' } & {
  Product?: Maybe<
    { __typename?: 'Product' } & Pick<
      Product,
      'id' | 'name' | 'description' | 'status' | 'price'
    > & {
        photo?: Maybe<
          { __typename?: 'ProductImage' } & Pick<
            ProductImage,
            'id' | 'altText'
          > & {
              image?: Maybe<
                { __typename?: 'CloudinaryImage_File' } & Pick<
                  CloudinaryImage_File,
                  'id' | 'publicUrlTransformed'
                >
              >;
            }
        >;
      }
  >;
};

export type CreateProductMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Upload']>;
  price?: Maybe<Scalars['Int']>;
}>;

export type CreateProductMutation = { __typename?: 'Mutation' } & {
  createProduct?: Maybe<
    { __typename?: 'Product' } & Pick<Product, 'id' | 'name' | 'description'>
  >;
};

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
}>;

export type UpdateProductMutation = { __typename?: 'Mutation' } & {
  updateProduct?: Maybe<{ __typename?: 'Product' } & Pick<Product, 'id'>>;
};

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteProductMutation = { __typename?: 'Mutation' } & {
  deleteProduct?: Maybe<{ __typename?: 'Product' } & Pick<Product, 'id'>>;
};

export type TotalProductsQueryVariables = Exact<{ [key: string]: never }>;

export type TotalProductsQuery = { __typename?: 'Query' } & {
  _allProductsMeta?: Maybe<
    { __typename?: '_QueryMeta' } & Pick<_QueryMeta, 'count'>
  >;
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type AllUsersQuery = { __typename?: 'Query' } & {
  allUsers?: Maybe<Array<Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>>>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = { __typename?: 'Query' } & {
  authenticatedItem?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'email' | 'name'>
  >;
};

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SigninMutation = { __typename?: 'Mutation' } & {
  authenticateUserWithPassword:
    | ({ __typename?: 'UserAuthenticationWithPasswordSuccess' } & Pick<
        UserAuthenticationWithPasswordSuccess,
        'sessionToken'
      > & { item: { __typename?: 'User' } & Pick<User, 'id' | 'name'> })
    | ({ __typename?: 'UserAuthenticationWithPasswordFailure' } & Pick<
        UserAuthenticationWithPasswordFailure,
        'code' | 'message'
      >);
};

export type SignoutMutationVariables = Exact<{ [key: string]: never }>;

export type SignoutMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'endSession'
>;

export type CreateUserMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>
  >;
};

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  sendUserPasswordResetLink?: Maybe<
    { __typename?: 'SendUserPasswordResetLinkResult' } & Pick<
      SendUserPasswordResetLinkResult,
      'code' | 'message'
    >
  >;
};

export type Reset_PasswordMutationVariables = Exact<{
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
}>;

export type Reset_PasswordMutation = { __typename?: 'Mutation' } & {
  redeemUserPasswordResetToken?: Maybe<
    { __typename?: 'RedeemUserPasswordResetTokenResult' } & Pick<
      RedeemUserPasswordResetTokenResult,
      'code' | 'message'
    >
  >;
};

export const AllProductDocument = gql`
  query AllProduct($skip: Int = 0, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      price
      description
      status
      photo {
        id
        image {
          id
          publicUrlTransformed
        }
      }
    }
  }
`;

/**
 * __useAllProductQuery__
 *
 * To run a query within a React component, call `useAllProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllProductQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllProductQuery,
    AllProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductQuery, AllProductQueryVariables>(
    AllProductDocument,
    options,
  );
}
export function useAllProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllProductQuery,
    AllProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductQuery, AllProductQueryVariables>(
    AllProductDocument,
    options,
  );
}
export type AllProductQueryHookResult = ReturnType<typeof useAllProductQuery>;
export type AllProductLazyQueryHookResult = ReturnType<
  typeof useAllProductLazyQuery
>;
export type AllProductQueryResult = Apollo.QueryResult<
  AllProductQuery,
  AllProductQueryVariables
>;
export const ProductDocument = gql`
  query Product($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      status
      price
      photo {
        id
        image {
          id
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductQuery,
    ProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  );
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<
  ProductQuery,
  ProductQueryVariables
>;
export const CreateProductDocument = gql`
  mutation CreateProduct(
    $name: String
    $description: String
    $image: Upload
    $price: Int
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        status: "AVAILABLE"
        price: $price
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      description
    }
  }
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      image: // value for 'image'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const UpdateProductDocument = gql`
  mutation UpdateProduct(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
    }
  }
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(UpdateProductDocument, options);
}
export type UpdateProductMutationHookResult = ReturnType<
  typeof useUpdateProductMutation
>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
export const DeleteProductDocument = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
export type DeleteProductMutationFn = Apollo.MutationFunction<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >(DeleteProductDocument, options);
}
export type DeleteProductMutationHookResult = ReturnType<
  typeof useDeleteProductMutation
>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const TotalProductsDocument = gql`
  query TotalProducts {
    _allProductsMeta {
      count
    }
  }
`;

/**
 * __useTotalProductsQuery__
 *
 * To run a query within a React component, call `useTotalProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TotalProductsQuery,
    TotalProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TotalProductsQuery, TotalProductsQueryVariables>(
    TotalProductsDocument,
    options,
  );
}
export function useTotalProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TotalProductsQuery,
    TotalProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TotalProductsQuery, TotalProductsQueryVariables>(
    TotalProductsDocument,
    options,
  );
}
export type TotalProductsQueryHookResult = ReturnType<
  typeof useTotalProductsQuery
>;
export type TotalProductsLazyQueryHookResult = ReturnType<
  typeof useTotalProductsLazyQuery
>;
export type TotalProductsQueryResult = Apollo.QueryResult<
  TotalProductsQuery,
  TotalProductsQueryVariables
>;
export const AllUsersDocument = gql`
  query AllUsers {
    allUsers {
      id
    }
  }
`;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(
    AllUsersDocument,
    options,
  );
}
export function useAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllUsersQuery,
    AllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(
    AllUsersDocument,
    options,
  );
}
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<
  typeof useAllUsersLazyQuery
>;
export type AllUsersQueryResult = Apollo.QueryResult<
  AllUsersQuery,
  AllUsersQueryVariables
>;
export const CurrentUserDocument = gql`
  query CurrentUser {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options,
  );
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options,
  );
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
export const SigninDocument = gql`
  mutation Signin($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;
export type SigninMutationFn = Apollo.MutationFunction<
  SigninMutation,
  SigninMutationVariables
>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SigninMutation,
    SigninMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SigninMutation, SigninMutationVariables>(
    SigninDocument,
    options,
  );
}
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<
  SigninMutation,
  SigninMutationVariables
>;
export const SignoutDocument = gql`
  mutation Signout {
    endSession
  }
`;
export type SignoutMutationFn = Apollo.MutationFunction<
  SignoutMutation,
  SignoutMutationVariables
>;

/**
 * __useSignoutMutation__
 *
 * To run a mutation, you first call `useSignoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signoutMutation, { data, loading, error }] = useSignoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignoutMutation,
    SignoutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignoutMutation, SignoutMutationVariables>(
    SignoutDocument,
    options,
  );
}
export type SignoutMutationHookResult = ReturnType<typeof useSignoutMutation>;
export type SignoutMutationResult = Apollo.MutationResult<SignoutMutation>;
export type SignoutMutationOptions = Apollo.BaseMutationOptions<
  SignoutMutation,
  SignoutMutationVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($name: String, $email: String, $password: String) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const Reset_PasswordDocument = gql`
  mutation Reset_Password(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      token: $token
      email: $email
      password: $password
    ) {
      code
      message
    }
  }
`;
export type Reset_PasswordMutationFn = Apollo.MutationFunction<
  Reset_PasswordMutation,
  Reset_PasswordMutationVariables
>;

/**
 * __useReset_PasswordMutation__
 *
 * To run a mutation, you first call `useReset_PasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReset_PasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useReset_PasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useReset_PasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Reset_PasswordMutation,
    Reset_PasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Reset_PasswordMutation,
    Reset_PasswordMutationVariables
  >(Reset_PasswordDocument, options);
}
export type Reset_PasswordMutationHookResult = ReturnType<
  typeof useReset_PasswordMutation
>;
export type Reset_PasswordMutationResult = Apollo.MutationResult<Reset_PasswordMutation>;
export type Reset_PasswordMutationOptions = Apollo.BaseMutationOptions<
  Reset_PasswordMutation,
  Reset_PasswordMutationVariables
>;
