import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("choc.bg", "whiteAlpha.900")(props),
      bg: mode("white", "choc.bg")(props),
      transition: "background .4s ease-in-out",
    },
    html: {
      minH: "100%",
    },
  }),
};
export default styles;
