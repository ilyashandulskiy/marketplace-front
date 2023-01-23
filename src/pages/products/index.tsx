import {Products} from "@/components/pages/Products";
import {api} from "@/utils/api";
import {NextPageContext} from "next";

export async function getServerSideProps(context: NextPageContext) {
  // @ts-ignore
  const products = await api.getProducts(context.query.search ?? '');

  return {
    props: {
      defaultProducts: products
    },
  }
}

export default Products