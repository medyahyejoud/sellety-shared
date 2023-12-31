import type { Product } from "../shopify/types";

export type Maybe<T> = T | null;

export declare type SanityDocument<
  T extends Record<string, unknown> = Record<string, unknown>
> = {
  [P in keyof T]: T[P];
} & {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
};

export type SanityInformational = {
  _key: string;
  _type: string;
  description: SanityLocalizedText;
  hasTitle: boolean;
  informationalIcon: string;
  isIconOutlined: boolean;
  link: SanityLink;
  title: SanityLocalizedText;
};

export type SanityLink =
  | SanityInternalLink
  | SanityExternalLink
  | SanityHashLink;

export type SanityBaseLink = {
  _key: string;
  title: SanityLocalizedText;
};

export type SanityInternalLink = SanityBaseLink & {
  _type: "linkInternal";
  reference: ProductOrCollectionReference | PageReference;
};

export type SanityExternalLink = SanityBaseLink & {
  _type: "linkExternal";
  newWindow: boolean;
  url: string;
};

export type SanityHashLink = SanityBaseLink & {
  _type: "linkHash";
  hashID: string;
};

export type Reference = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _updatedAt: Date;
};

export type ProductOrCollectionReference = {
  _type: "collection" | "product";
  store: SanityCollectionStore;
} & Reference;
export type PageReference = {
  _type?: "page" | "preorder";
  title: string;
  slug: SanitySlug;
} & Reference;

export type SanityCollectionStore = {
  createdAt: Date;
  descriptionHtml: string;
  gid: string;
  id: number;
  imageUrl: string;
  isDeleted: boolean;
  slug: SanitySlug;
  sortOrder: string;
  title: string;
  updatedAt: Date;
  status?: string;
};

export type SanitySlug = {
  _type: string;
  current: string;
};

export type SanityProductCardSchema = {
  title: string;
  previewImageUrl: string;
  vendor: string;
  gid: string;
  slug: {
    current: string;
  };
  price: number;
  compareAtPrice: number;
  tags: string;
};

export type SanityEmptyFilterResults = Maybe<{
  heading: Maybe<string>;
  body: Maybe<string>;
}>;

export type SanityCollection = {
  collectionType: "COLLECTION" | "CATEGORY" | "VENDOR";
  imageUrl: string;
  isDeleted: boolean;
  modules: Maybe<SanityModule[]>;
  selletyOrGrocery: "sellety" | "grocery" | "all";
  shopifyId: string;
  slug: string;
  title: SanityLocalizedText;
};

export type ProductModules = "productHero" | "productDetails";
export type CollectionModules = "productsGrid";
export type OtherModules =
  | "brandsGrid"
  | "categoriesGrid"
  | "collectionsGrid"
  | "heroGrid"
  | "simpleHeroSection"
  | "heroWithContent"
  | "informationals"
  | "productsList"
  | "marketingCampains"
  | "preorderNow"
  | "productsShowdownGrid"
  | "productsShowdownHorizontal";

export type SanityCategoriesBase = {
  id: string;
};

export type SanityCategoriesSimple = {
  type: "categories";
  categoriesList: SanityCategoriesList[];
} & SanityCategoriesBase;

export type SanityCategoriesGrouped = {
  type: "categoriesFamilies";
  categoriesFamiliesList: CategoriesFamiliesList[];
} & SanityCategoriesBase;

export type SanityLocalizedText = {
  en: string | null;
  fr: string | null;
  ar: string | null;
};

export type CategoriesFamiliesList = {
  categoriesList: SanityCategoriesList[];
  title: SanityLocalizedText;
};

export type SanityCategoriesList = {
  id: string;
  imageUrl: string;
  selletyOrGrocery: SelletyOrGrocery;
  shopifyID: string;
  slug: string;
  title: SanityLocalizedText;
};

export enum SelletyOrGrocery {
  All = "all",
  Grocery = "grocery",
  Sellety = "sellety",
}

export type SanityCategories = SanityCategoriesSimple | SanityCategoriesGrouped;

export type SanityAllCategories = {
  sellety: SanityCategories;
  grocery: SanityCategories;
};

export type SanitySite = {
  cookieConsent: CookieConsent;
  gtmID: string | null;
  rootDomain: string | null;
  seo: SEO;
  shop: Shop;
  title: SanityLocalizedText | null;
};

export type CookieConsent = {
  enabled: boolean;
  link: Link;
  message: string;
};

export type Link = {
  slug: string;
  type: string;
};

export type SEO = {
  metaTitle: string;
  shareTitle: null;
  metaDesc: string;
  shareDesc: null;
  favicon: null;
  shareGraphic: null;
  faviconLegacy: null;
  touchIcon: null;
};

export type Shop = {
  cartMessage: string;
  storeURL: string;
};

export type SanityDefaultPage = {
  site: SanitySite;
  categories?: SanityCategories;
  groceryCategories?: SanityCategories;
};

export type SanityPageData = {
  pageData: SanityModularPage;
} & SanityDefaultPage;

export type SanityCollectionPage = {
  collection: SanityCollection;
  paginationLimit: number | null;
  emptyFilterResults: SanityEmptyFilterResults;
};

export type ReviewsAverage = {
  numberOfReviews: number;
  averageRating: number;
};

export type SanityReview = {
  _key: string;
  body: string;
  customerName: string;
  rating: number;
};

export type SanityProductReviews = SanityDocument<
  {
    reviewedProduct: {
      _ref: string;
      _type: string;
    };
    reviews: SanityReview[];
  } & ReviewsAverage
>;

export type ProductReviewInput = {
  productId: string;
  customerName: string;
  body: string;
  rating: number;
  customerId?: string;
  averageRatingMetafieldId?: Maybe<string>;
  numberOfReviewMetafieldId?: Maybe<string>;
};

export type SanityProductRef = {
  _key: string;
  _ref: string;
  _type: "product";
  _weak: boolean;
};

export type SanityImageAsset = {
  createdAt: string;
  extension: string;
  id: string;
  metadata: {
    aspectRatio: number;
    blurHash: string;
    height: number;
    lqip: string;
    width: number;
  };
  size: number;
  updatedAt: string;
  url: string;
};

export type SanityImageDeref = {
  type: string;
  asset: SanityImageAsset;
};

export type SanityBaseImage = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type SanityCollectionTypes = "COLLECTION" | "VENDOR" | "CATEGORY";
export type SanityCollectionMode = "sellety" | "grocery";

export type SanityDereferencedCollection = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "collection";
  _updatedAt: string;
  collectionType: SanityCollectionTypes;
  selletyOrGrocery: SanityCollectionMode;
  title: SanityLocalizedText;
  store: SanityCollectionStore;
};

export type SanityImageWithDerefernecedCollectionBase = {
  _key: string;
  _type: string;
  altText?: SanityLocalizedText;
  customRatio: number;
  image: SanityImageDeref;
};

type SanityImageWithDerefCollectionNonAssociated =
  SanityImageWithDerefernecedCollectionBase & {
    associateWithCollection?: false;
    collection: null;
  };

type SanityImageWithDerefCollectionAssociated =
  SanityImageWithDerefernecedCollectionBase & {
    associateWithCollection: true;
    collection: SanityDereferencedCollection;
  };

export type SanityImageWithDerefernecedCollection =
  | SanityImageWithDerefCollectionAssociated
  | SanityImageWithDerefCollectionNonAssociated;

export type SanityModules =
  | "heroGrid"
  | "heroWithContent"
  | "simpleHeroSection"
  | "brandsGrid"
  | "categoriesGrid"
  | "collectionsGrid"
  | "productsList";

export type SanityCollectionsGridDisplayTypes =
  | "marketingCampains"
  | "collectionsGrid";

export type SanityProductsListDisplayTypes =
  | "productsShowdownGrid"
  | "productsShowdownHorizontal";

export type SanityHeroGridModule = {
  key: string;
  type: "heroGrid";
  heroCarouselImages: SanityImageWithDerefernecedCollection[];
  heroSecondaryImages: SanityImageWithDerefernecedCollection[];
};

export type SanityHeroWithContentModule = {
  key: string;
  type: "heroWithContent";
  heading: SanityLocalizedText;
  description: SanityLocalizedText;
  heroMainImage: SanityImageWithDerefernecedCollection;
  link?: SanityLink;
};

export type SanitySimpleHeroSectionModule = {
  key: string;
  type: "simpleHeroSection";
  heroCarouselImages: SanityImageWithDerefernecedCollection[];
};

export type SanityBrandsGridModule = {
  key: string;
  type: "brandsGrid";
  title: SanityLocalizedText;
  brandsImages: SanityImageWithDerefernecedCollection[];
};

export type SanityCategoriesGridModule = {
  key: string;
  type: "categoriesGrid";
  title: SanityLocalizedText;
  collectionList: SanityDereferencedCollection[];
};

export type SanityCollectionGridModule = {
  key: string;
  type: "collectionsGrid";
  displayType: SanityCollectionsGridDisplayTypes;
  title: SanityLocalizedText | null;
  collectionsImages: SanityImageWithDerefernecedCollection[];
};

export type SanityInformationalsModule = {
  key: string;
  type: "informationals";
  informationalsList: SanityInformational[];
};

export type SanityProductsListModule = {
  key: string;
  type: "productsList";
  displayType: SanityProductsListDisplayTypes;
  title: SanityLocalizedText;
  products: { shopifyId: string }[];
};

export type SanityProductsListModuleWithShopifyProducts = {
  key: string;
  type: "productsList";
  displayType: SanityProductsListDisplayTypes;
  title: SanityLocalizedText | string;
  products: Product[];
};

export type SanityModule =
  | SanityHeroGridModule
  | SanityHeroWithContentModule
  | SanitySimpleHeroSectionModule
  | SanityBrandsGridModule
  | SanityCategoriesGridModule
  | SanityCollectionGridModule
  | SanityProductsListModuleWithShopifyProducts;

export type SanityProductVendor = {
  collectionType: "VENDOR";
  imageUrl: string;
  isDeleted: boolean;
  isVendorCertified: boolean;
  selletyOrGrocery: SanityCollectionMode;
  shopifyID: string;
  title: string;
};

export type SanityGlobalWebAppData = {
  site: SanitySite;
  categories: SanityAllCategories;
};

export type SanityGlobalAppData = {
  site: SanitySite;
  categories: SanityAllCategories;
};

export type SanityModularPage = {
  slug: string;
  title: string;
  modules: Maybe<SanityModule[]>;
};

/**
 * @deprecated use `SanityPaginationData` instead.
 */
export type SanityPaginationMetadata = {
  paginationLimit: number;
  emptyFilterResults: SanityEmptyFilterResults;
};

export type SanityPaginationData = {
  paginationLimit: number;
  emptyFilterResults: SanityEmptyFilterResults;
};

/**
 * @deprecated use `SanityGlobalAppData` and `SanityModularPage` instead.
 */
export type SanityModularWebPagePayload = SanityGlobalWebAppData & {
  pageData: SanityModularPage;
};

export type SanityDefaultWebPageWithSearch = SanityGlobalWebAppData & {
  pageData: SanityPaginationMetadata;
};

export type SanityDefaultPageWithCollection = SanityGlobalWebAppData & {
  pageData: SanityPaginationMetadata & {
    collection: SanityCollection;
  };
};

export type SanityDefaultPageWithCollectionArgs = {
  slug: string;
};

/**
 * @deprecated use `SanityModularPageArgs` instead.
 */
export type SanityModularWebPageArgs = {
  type: "home" | "preorder";
  id: "sellety" | "grocery" | "preorderPage";
};

export type SanityModularPageArgs = {
  type: "home" | "preorder";
  id: "sellety" | "grocery" | "preorderPage";
};

export type SanityCollectionArgs = {
  slug: string;
};

export type SanityInformationalItem = {
  description: string;
  cta: string;
  newWindow: boolean;
  isExternalLink: boolean;
  url: string;
};
