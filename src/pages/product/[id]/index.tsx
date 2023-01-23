import {Product} from "@/components/pages/Product";
import {api} from "@/utils/api";
import {NextPageContext} from "next";

export async function getServerSideProps(context: NextPageContext) {

  // @ts-ignore
  const product = await api.getProductDetails(context.query.id);

  return {
    props: {
      defaultProduct: product
    },
  }
}

export default Product