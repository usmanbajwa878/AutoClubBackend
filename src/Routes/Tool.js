const router = require("express").Router();
const ToolHelper = require("../Helpers/ToolHelper");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isToolExists = await ToolHelper.checkTool(req);
    if (isToolExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.TOOL_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const tool = await ToolHelper.createTool(req);
    const savedTool = await tool.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.TOOLS_ADDED,
          CODE.SUCCESS,
          true,
          savedTool
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.put("/update", async (req, res) => {
  try {
    const tool = await ToolHelper.getToolsById(req.body.toolId);
    if (tool.length === 0)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.TOOL_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isToolUpdated = await ToolHelper.updateTool(req);
    if (!isToolUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.TOOL_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.TOOLS_UPDATED,
          CODE.SUCCESS,
          true,
          req.body
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/", async (req, res) => {
  try {
    const tools = await ToolHelper.getAllTools();
    if (tools.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.TOOL_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.TOOLS_FOUND,
          CODE.SUCCESS,
          true,
          tools
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const toolCategory = await ToolHelper.getToolByCategory(
      req.params.category
    );
    if (toolCategory.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.TOOL_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.TOOLS_FOUND,
          CODE.SUCCESS,
          true,
          toolCategory
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/issueHistory/:toolId", async (req, res) => {
  try {
    const tool = await ToolHelper.getToolIssueHistory(req.params.toolId);
    if (tool.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.TOOL_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.TOOLS_FOUND,
          CODE.SUCCESS,
          true,
          tool
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/warranty/:toolId", async (req, res) => {
  try {
    const tool = await ToolHelper.getToolWarranty(req.params.toolId);

    if (tool.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.TOOL_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.TOOLS_FOUND,
          CODE.SUCCESS,
          true,
          tool
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.delete("/delete/:toolId", async (req, res) => {
  try {
    const { deleted, error } = await ToolHelper.deleteTool(req);
    console.log("deletuon", deleted, error);
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            error ? error : RESPONSE_MESSAGES.FAIL.TOOL_DELETE_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.TOOLS_DELETED,
          CODE.SUCCESS,
          true,
          { tool: deleted }
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

module.exports = router;
