export type CompanyDTO = {
  name: string;
  description: string;
  address: string;
  teamSize: number;
  estDate: Date;
  websiteUrl: string;
  mapLink: string;
};

export type PaginationDTO = {
  currentPage: number;
  totalCount: number;
  totalPage: number;
};
