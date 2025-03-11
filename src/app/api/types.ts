interface Shipping {
  free_shipping: boolean;
}

export interface ProductResponse {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  shipping: Shipping;
}
export interface ProductResponseDetail extends ProductResponse {
  initial_quantity: number;
}

interface PathFromRoot {
  id: string;
  name: string;
}

interface FilterValue {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}
