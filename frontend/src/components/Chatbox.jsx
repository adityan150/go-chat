import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Flex
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      bg="white"
      w={{ base: "100%", md: "68%" }}
      h="100%"
      borderWidth="1px"
      borderRadius="lg"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Flex>
  );
};

Chatbox.propTypes = {
  fetchAgain: PropTypes.bool,
  setFetchAgain: PropTypes.func,
};

export default Chatbox;
