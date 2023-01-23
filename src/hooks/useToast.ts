import toast from "react-hot-toast";

export const useToast = () => ({

 success(text: string) {
   toast.success(text)
 },

 error(text: string) {
    toast.error(text)
  }

})