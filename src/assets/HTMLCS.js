/*! html_codesniffer - v2.3.0 - 2019-02-24 */
/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["htmlcs"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    var exports = factory();
    for (var prop in exports) {
      root[prop] = exports[prop];
    }
  }
})(this, function() {
  var _global = {
    translation: {}
  };

  (_global.translation.en = {
    auditor_name: "HTML_CodeSniffer by Squiz",
    auditor_using_standard: "Using standard",
    auditor_standards: "Standards",
    auditor_code_snippet: "Code Snippet",
    auditor_close: "Close",
    auditor_select_types: "Select the types of issues to include in the report",
    auditor_home: "Home",
    auditor_view_report: "View Report",
    auditor_report: "Report",
    auditor_back_to_report: "Back to Report",
    auditor_previous_issue: "Previous Issue",
    auditor_next_issue: "Next Issue",
    auditor_issue: "Issue",
    auditor_of: "of",
    auditor_errors: "Errors",
    auditor_error: "Error",
    auditor_warnings: "Warnings",
    auditor_warning: "Warning",
    auditor_notices: "Notices",
    auditor_notice: "Notice",
    auditor_toggle_display_of: "Toggle display of",
    auditor_messages: "messages",
    auditor_unable_to_point:
      "Unable to point to the element associated with this issue.",
    auditor_unable_to_point_entire:
      "Unable to point to this issue, as it relates to the entire document.",
    auditor_unable_to_point_removed:
      "Unable to point to this element as it has been removed from the document since the report was generated.",
    auditor_unable_to_point_outside:
      "Unable to point to this element because it is located outside the document's body element.",
    auditor_unable_to_point_hidden:
      "Unable to point to this element because it is hidden from view, or does not have a visual representation.",
    auditor_point_to_element: "Point to Element",
    auditor_unsupported_browser:
      "The code snippet functionality is not supported in this browser.",
    auditor_page: "Page",
    auditor_updated_to: "HTML_CodeSniffer has been updated to version",
    auditor_view_the_changelog: "View the changelog",
    auditor_success_criterion: "Success Criterion",
    auditor_suggested_techniques: "Suggested Techniques",
    auditor_applies_entire_document: "This applies to the entire document",
    "1_1_1_H30.2":
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    "1_1_1_H67.1":
      "Img element with empty alt text must have absent or empty title attribute.",
    "1_1_1_H67.2":
      "Img element is marked so that it is ignored by Assistive Technology.",
    "1_1_1_H37":
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    "1_1_1_G94.Image":
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    "1_1_1_H36":
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    "1_1_1_G94.Button":
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    "1_1_1_H24":
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    "1_1_1_H24.2":
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    "1_1_1_G73,G74":
      "If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.",
    "1_1_1_H2.EG5":
      "Img element inside a link must not use alt text that duplicates the text content of the link.",
    "1_1_1_H2.EG4":
      "Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.",
    "1_1_1_H2.EG3":
      "Img element inside a link must not use alt text that duplicates the content of a text link beside it.",
    "1_1_1_H53,ARIA6":
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    "1_1_1_G94,G92.Object,ARIA6":
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    "1_1_1_H35.3":
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    "1_1_1_H35.2":
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    "1_1_1_G94,G92.Applet":
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    "1_2_1_G158":
      "If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.",
    "1_2_1_G159,G166":
      "If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.",
    "1_2_2_G87,G93":
      "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.",
    "1_2_3_G69,G78,G173,G8":
      "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.",
    "1_2_4_G9,G87,G93":
      "If this embedded object contains synchronised media, check that captions are provided for live audio content.",
    "1_2_5_G78,G173,G8":
      "If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.",
    "1_2_6_G54,G81":
      "If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.",
    "1_2_7_G8":
      "If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.",
    "1_2_8_G69,G159":
      "If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.",
    "1_2_9_G150,G151,G157":
      "If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.",
    "1_3_1_F92,ARIA4":
      'This element\'s role is "presentation" but contains child elements with semantic meaning.',
    "1_3_1_H44.NonExistent":
      'This label\'s "for" attribute contains an ID that does not exist in the document.',
    "1_3_1_H44.NonExistentFragment":
      'This label\'s "for" attribute contains an ID that does not exist in the document fragment.',
    "1_3_1_H44.NotFormControl":
      'This label\'s "for" attribute contains an ID for an element that is not a form control. Ensure that you have entered the correct ID for the intended element.',
    "1_3_1_H65":
      'This form control has a "title" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
    "1_3_1_ARIA6":
      'This form control has an "aria-label" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
    "1_3_1_ARIA16,ARIA9":
      'This form control contains an aria-labelledby attribute, however it includes an ID "{{id}}" that does not exist on an element. The aria-labelledby attribute will be ignored for labelling test purposes.',
    "1_3_1_F68.Hidden":
      "This hidden form field is labelled in some way. There should be no need to label a hidden form field.",
    "1_3_1_F68.HiddenAttr":
      'This form field is intended to be hidden (using the "hidden" attribute), but is also labelled in some way. There should be no need to label a hidden form field.',
    "1_3_1_F68":
      'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.',
    "1_3_1_H49.":
      "Presentational markup used that has become obsolete in HTML5.",
    "1_3_1_H49.AlignAttr": "Align attributes.",
    "1_3_1_H49.Semantic":
      "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
    "1_3_1_H49.AlignAttr.Semantic":
      "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
    "1_3_1_H42":
      "Heading markup should be used if this content is intended as a heading.",
    "1_3_1_H63.3":
      "Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.",
    "1_3_1_H63.2":
      "Scope attributes on td elements that act as headings for other elements are obsolete in HTML5. Use a th element instead.",
    "1_3_1_H43.ScopeAmbiguous":
      "Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.",
    "1_3_1_H43.IncorrectAttr":
      'Incorrect headers attribute on this td element. Expected "{{expected}}" but found "{{actual}}"',
    "1_3_1_H43.HeadersRequired":
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    "1_3_1_H43.MissingHeaderIds":
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    "1_3_1_H43.MissingHeadersAttrs":
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    "1_3_1_H43,H63":
      "The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.",
    "1_3_1_H63.1":
      "Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.",
    "1_3_1_H73.3.LayoutTable":
      "This table appears to be used for layout, but contains a summary attribute. Layout tables must not contain summary attributes, or if supplied, must be empty.",
    "1_3_1_H39,H73.4":
      "If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.",
    "1_3_1_H73.3.Check":
      "If this table is a data table, check that the summary attribute describes the table's organization or explains how to use the table.",
    "1_3_1_H73.3.NoSummary":
      "If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.",
    "1_3_1_H39.3.LayoutTable":
      "This table appears to be used for layout, but contains a caption element. Layout tables must not contain captions.",
    "1_3_1_H39.3.Check":
      "If this table is a data table, check that the caption element accurately describes this table.",
    "1_3_1_H39.3.NoCaption":
      "If this table is a data table, consider using a caption element to the table element to identify this table.",
    "1_3_1_H71.NoLegend":
      "Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.",
    "1_3_1_H85.2":
      "If this selection list contains groups of related options, they should be grouped with optgroup.",
    "1_3_1_H71.SameName":
      "If these radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element.",
    "1_3_1_H48.1":
      "This content looks like it is simulating an unordered list using plain text. If so, marking up this content with a ul element would add proper structure information to the document.",
    "1_3_1_H48.2":
      "This content looks like it is simulating an ordered list using plain text. If so, marking up this content with an ol element would add proper structure information to the document.",
    "1_3_1_G141_a":
      "The heading structure is not logically nested. This h{{headingNum}} element appears to be the primary document heading, so should be an h1 element.",
    "1_3_1_G141_b":
      "The heading structure is not logically nested. This h{{headingNum}} element should be an h{{properHeadingNum}} to be properly nested.",
    "1_3_1_H42.2":
      "Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.",
    "1_3_1_H48":
      "If this element contains a navigation section, it is recommended that it be marked up as a list.",
    "1_3_1_LayoutTable":
      "This table appears to be a layout table. If it is meant to instead be a data table, ensure header cells are identified using th elements.",
    "1_3_1_DataTable":
      "This table appears to be a data table. If it is meant to instead be a layout table, ensure there are no th elements, and no summary or caption.",
    "1_3_2_G57":
      "Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    "1_3_3_G96":
      "Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.",
    "1_4_1_G14,G18":
      "Check that any information conveyed using colour alone is also available in text, or through other visual cues.",
    "1_4_2_F23":
      "If this element contains audio that plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.",
    "1_4_3_F24.BGColour":
      "Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.",
    "1_4_3_F24.FGColour":
      "Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.",
    "1_4_3_G18_or_G145.Abs":
      "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.",
    "1_4_3_G18_or_G145.BgImage":
      "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
    "1_4_3_G18_or_G145.Alpha":
      "This element's text or background contains transparency. Ensure the contrast ratio between the text and background are at least {{required}}:1.",
    "1_4_3_G18_or_G145.Fail":
      "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.",
    "1_4_3_G18_or_G145.Fail.Recomendation": "Recommendation: change",
    "1_4_3_G18_or_G145.Fail.Recomendation.Text": "text colour to",
    "1_4_3_G18_or_G145.Fail.Recomendation.Background": "background to",
    "1_4_4_G142":
      "Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
    "1_4_5_G140,C22,C30.AALevel":
      "If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user's requirements.",
    "1_4_6_G18_or_G17.Abs":
      "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.",
    "1_4_6_G18_or_G17.BgImage":
      "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
    "1_4_6_G18_or_G17.Fail":
      "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.",
    "1_4_6_G18_or_G17.Fail.Recomendation": "Recommendation: change",
    "1_4_6_G18_or_G17.Fail.Recomendation.Text": "text colour to",
    "1_4_6_G18_or_G17.Fail.Recomendation.Background": "background to",
    "1_4_7_G56":
      "For pre-recorded audio-only content in this element that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.",
    "1_4_8_G148,G156,G175":
      "Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.",
    "1_4_8_H87,C20":
      "Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).",
    "1_4_8_C19,G172,G169":
      "Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.",
    "1_4_8_G188,C21":
      "Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.",
    "1_4_8_H87,G146,C26":
      "Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.",
    "1_4_9_G140,C22,C30.NoException":
      "Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
    "2_1_1_G90":
      "Ensure the functionality provided by an event handler for this element is available through the keyboard",
    "2_1_1_SCR20.DblClick":
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    "2_1_1_SCR20.MouseOver":
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    "2_1_1_SCR20.MouseOut":
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    "2_1_1_SCR20.MouseMove":
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    "2_1_1_SCR20.MouseDown":
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    "2_1_1_SCR20.MouseUp":
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    "2_1_2_F10":
      "Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.",
    "2_2_1_F40.2":
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    "2_2_1_F41.2":
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    "2_2_2_SCR33,SCR22,G187,G152,G186,G191":
      "If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.",
    "2_2_2_F4":
      "Ensure there is a mechanism available to stop this blinking element in less than five seconds.",
    "2_2_2_F47":
      "Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.",
    "2_2_3_G5":
      "Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
    "2_2_4_SCR14":
      "Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.",
    "2_2_5_G105,G181":
      "If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.",
    "2_3_1_G19,G176":
      "Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.",
    "2_3_2_G19":
      "Check that no component of the content flashes more than three times in any 1-second period.",
    "2_4_1_H64.1":
      "Iframe element requires a non-empty title attribute that identifies the frame.",
    "2_4_1_H64.2":
      "Check that the title attribute of this element contains text that identifies the frame.",
    "2_4_1_G1,G123,G124,H69":
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    "2_4_1_G1,G123,G124.NoSuchID":
      'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name.',
    "2_4_1_G1,G123,G124.NoSuchIDFragment":
      'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name in the fragment tested.',
    "2_4_2_H25.1.NoHeadEl":
      "There is no head section in which to place a descriptive title element.",
    "2_4_2_H25.1.NoTitleEl":
      "A title should be provided for the document, using a non-empty title element in the head section.",
    "2_4_2_H25.1.EmptyTitle":
      "The title element in the head section should be non-empty.",
    "2_4_2_H25.2": "Check that the title element describes the document.",
    "2_4_3_H4.2":
      "If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.",
    "2_4_4_H77,H78,H79,H80,H81,H33":
      "Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.",
    "2_4_4_H77,H78,H79,H80,H81":
      "Check that the link text combined with programmatically determined link context identifies the purpose of the link.",
    "2_4_5_G125,G64,G63,G161,G126,G185":
      "If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.",
    "2_4_6_G130,G131":
      "Check that headings and labels describe topic or purpose.",
    "2_4_7_G149,G165,G195,C15,SCR31":
      "Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.",
    "2_4_8_H59.1":
      "Link elements can only be located in the head section of the document.",
    "2_4_8_H59.2a":
      "Link element is missing a non-empty rel attribute identifying the link type.",
    "2_4_8_H59.2b":
      "Link element is missing a non-empty href attribute pointing to the resource being linked.",
    "2_4_9_H30":
      "Check that text of the link describes the purpose of the link.",
    "3_1_1_H57.2":
      "The html element should have a lang or xml:lang attribute which describes the language of the document.",
    "3_1_1_H57.3.Lang":
      "The language specified in the lang attribute of the document element does not appear to be well-formed.",
    "3_1_1_H57.3.XmlLang":
      "The language specified in the xml:lang attribute of the document element does not appear to be well-formed.",
    "3_1_2_H58":
      "Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.",
    "3_1_2_H58.1.Lang":
      "The language specified in the lang attribute of this element does not appear to be well-formed.",
    "3_1_2_H58.1.XmlLang":
      "The language specified in the xml:lang attribute of this element does not appear to be well-formed.",
    "3_1_3_H40,H54,H60,G62,G70":
      "Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
    "3_1_4_G102,G55,G62,H28,G97":
      "Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.",
    "3_1_5_G86,G103,G79,G153,G160":
      "Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.",
    "3_1_6_H62.1.HTML5":
      "Ruby element does not contain an rt element containing pronunciation information for its body text.",
    "3_1_6_H62.1.XHTML11":
      "Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.",
    "3_1_6_H62.2":
      "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.",
    "3_2_1_G107":
      "Check that a change of context does not occur when this input field receives focus.",
    "3_2_2_H32.2":
      'This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.',
    "3_2_3_G61":
      "Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
    "3_2_4_G197":
      "Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.",
    "3_2_5_H83.3":
      "Check that this link's link text contains information indicating that the link will open in a new window.",
    "3_3_1_G83,G84,G85":
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    "3_3_2_G131,G89,G184,H90":
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    "3_3_3_G177":
      "Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.",
    "3_3_4_G98,G99,G155,G164,G168.LegalForms":
      "If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.",
    "3_3_5_G71,G184,G193":
      "Check that context-sensitive help is available for this form, at a Web-page and/or control level.",
    "3_3_6_G98,G99,G155,G164,G168.AllForms":
      "Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.",
    "4_1_1_F77": 'Duplicate id attribute value "{{id}}" found on the web page.',
    "4_1_2_H91.A.Empty":
      "Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.",
    "4_1_2_H91.A.EmptyWithName":
      "Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.",
    "4_1_2_H91.A.EmptyNoId":
      "Anchor element found with no link content and no name and/or ID attribute.",
    "4_1_2_H91.A.NoHref":
      "Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.",
    "4_1_2_H91.A.Placeholder":
      "Anchor element found with link content, but no href, ID or name attribute has been supplied.",
    "4_1_2_H91.A.NoContent":
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    "4_1_2_input_element": "input element",
    "4_1_2_role_of_button": 'element has a role of "button" but',
    "4_1_2_element_content": "element content",
    "4_1_2_element": "element",
    "4_1_2_msg_pattern":
      "This {{msgNodeType}} does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.",
    "4_1_2_msg_pattern2":
      "This {{msgNodeType}} does not have a value available to an accessibility API.",
    "4_1_2_msg_add_one": "Add one by adding content to the element.",
    "4_1_2_msg_pattern3":
      "This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.",
    "4_1_2_value_exposed_using_attribute":
      "A value is exposed using the {{requiredValue}} attribute.",
    "4_1_2_value_exposed_using_element":
      "A value is exposed using the {{requiredValue}} element."
  }),
    (_global.translation.fr = {
      auditor_name: "HTML_CodeSniffer par Squiz",
      auditor_using_standard: "Utilisation de la norme",
      auditor_standards: "Normes",
      auditor_code_snippet: "Bout de code",
      auditor_close: "Fermer",
      auditor_select_types:
        "Sélectionner les types de questions à inclure dans le rapport",
      auditor_home: "Accueil",
      auditor_view_report: "Voir le rapport",
      auditor_report: "Rapport",
      auditor_back_to_report: "Retour au rapport",
      auditor_previous_issue: "Problème précédent",
      auditor_next_issue: "Prochain problème",
      auditor_issue: "Problème",
      auditor_of: "de",
      auditor_errors: "Erreurs",
      auditor_error: "Erreur",
      auditor_warnings: "Attentions",
      auditor_warning: "Attention",
      auditor_notices: "Avis",
      auditor_notice: "Avis",
      auditor_toggle_display_of: "Basculer l'affichage de",
      auditor_messages: "messages",
      auditor_unable_to_point:
        "Impossible de pointer vers l'élément associé à ce problème.",
      auditor_unable_to_point_entire:
        "Impossible d'attirer l'attention sur cette question, car elle concerne l'ensemble du document.",
      auditor_unable_to_point_removed:
        "Impossible de pointer vers cet élément car il a été supprimé du document depuis que le rapport a été généré.",
      auditor_unable_to_point_outside:
        "Impossible de pointer vers cet élément parce qu'il est situé à l'extérieur de l'élément de corps du document.",
      auditor_unable_to_point_hidden:
        "Impossible de pointer vers cet élément parce qu'il est caché de la vue ou n'a pas de représentation visuelle.",
      auditor_point_to_element: "Pointer vers l'élément",
      auditor_unsupported_browser:
        "La fonctionnalité d'extrait de code n'est pas prise en charge dans ce navigateur.",
      auditor_page: "Page",
      auditor_updated_to: "HTML_CodeSniffer a été mis à jour en version",
      auditor_view_the_changelog: "Voir le journal des modifications",
      auditor_success_criterion: "Critère de réussite",
      auditor_suggested_techniques: "Techniques suggérées",
      auditor_applies_entire_document:
        "Ceci s'applique à l'ensemble du document",
      "1_1_1_H30.2":
        "L'élément Img est le seul contenu du lien, mais il manque le texte alt. Le texte alternatif devrait décrire le but du lien.",
      "1_1_1_H67.1":
        "L'élément Img avec du texte alt vide doit avoir un attribut de titre absent ou vide.",
      "1_1_1_H67.2":
        "L'élément Img est marqué de sorte qu'il est ignoré par la technologie d'assistance.",
      "1_1_1_H37":
        "Élément Img auquel il manque un attribut alt. Utilisez l'attribut alt pour spécifier une alternative de texte court.",
      "1_1_1_G94.Image":
        "Assurez-vous que le texte alt de l'élément img sert aux mêmes fins et présente les mêmes informations que l'image.",
      "1_1_1_H36":
        "Le bouton de soumission d'image n'a pas de texte alternatif. Spécifiez une alternative de texte qui décrit la fonction du bouton, en utilisant l'attribut alt.",
      "1_1_1_G94.Button":
        "Assurez-vous que le texte alt du bouton de soumission d'image identifie le but du bouton.",
      "1_1_1_H24":
        "Élément de zone dans une carte-image sans attribut alt. Chaque élément de zone doit avoir une alternative textuelle qui décrit la fonction de la zone de la carte image.",
      "1_1_1_H24.2":
        "Assurez-vous que l'alternative textuelle de l'élément de zone sert le même but que la partie de l'image de la carte-image à laquelle il fait référence.",
      "1_1_1_G73,G74":
        "Si cette image ne peut être entièrement décrite dans un texte court, assurez-vous qu'un texte long est également disponible, comme dans le corps du texte ou par le biais d'un lien.",
      "1_1_1_H2.EG5":
        "L'élément Img à l'intérieur d'un lien ne doit pas utiliser de texte alt qui duplique le contenu textuel du lien.",
      "1_1_1_H2.EG4":
        "L'élément Img à l'intérieur d'un lien a du texte alt vide ou manquant lorsqu'un lien à côté contient du texte de lien. Pensez à combiner les liens.",
      "1_1_1_H2.EG3":
        "L'élément Img à l'intérieur d'un lien ne doit pas utiliser de texte alt qui duplique le contenu d'un lien texte à côté.",
      "1_1_1_H53,ARIA6":
        "Les éléments d'objet doivent contenir une alternative de texte après l'épuisement de toutes les autres alternatives.",
      "1_1_1_G94,G92.Object,ARIA6":
        "Vérifiez que des textes courts (et, le cas échéant, les longs) sont disponibles pour les contenus non textuels qui servent le même but et présentent la même information.",
      "1_1_1_H35.3":
        "Les éléments de l'applet doivent contenir une alternative textuelle dans le corps de l'élément, pour les navigateurs qui ne supportent pas l'élément applet.",
      "1_1_1_H35.2":
        "Les éléments de l'applet doivent contenir un attribut alt, afin de fournir une alternative textuelle aux navigateurs supportant l'élément mais incapables de charger l'applet.",
      "1_1_1_G94,G92.Applet":
        "Vérifiez que des textes courts (et, le cas échéant, les longs) sont disponibles pour les contenus non textuels qui servent le même but et présentent la même information.",
      "1_2_1_G158":
        "Si cet objet incorporé ne contient que de l'audio préenregistré et n'est pas fourni comme alternative pour le contenu textuel, vérifiez qu'une version texte alternative est disponible.",
      "1_2_1_G159,G166":
        "Si cet objet incorporé ne contient que de la vidéo préenregistrée et n'est pas fourni comme alternative au contenu textuel, vérifiez qu'une version texte alternative est disponible, ou qu'une piste audio est fournie qui présente des informations équivalentes.",
      "1_2_2_G87,G93":
        "Si cet objet incorporé contient un support synchronisé préenregistré et n'est pas fourni comme alternative pour le contenu textuel, vérifiez que les légendes sont fournies pour le contenu audio.",
      "1_2_3_G69,G78,G173,G8":
        "Si cet objet incorporé contient un support synchronisé préenregistré et n'est pas fourni comme alternative au contenu textuel, vérifiez qu'une description audio de sa vidéo et/ou une version textuelle alternative du contenu est fournie.",
      "1_2_4_G9,G87,G93":
        "Si cet objet incorporé contient des médias synchronisés, vérifiez que les légendes sont fournies pour le contenu audio en direct.",
      "1_2_5_G78,G173,G8":
        "Si cet objet incorporé contient un support synchronisé préenregistré, vérifiez qu'une description audio est fournie pour son contenu vidéo.",
      "1_2_6_G54,G81":
        "Si cet objet incorporé contient un support synchronisé préenregistré, vérifiez qu'une interprétation en langage des signes est fournie pour l'audio.",
      "1_2_7_G8":
        "Si cet objet incorporé contient des médias synchronisés, et si les pauses dans l'audio de premier plan ne suffisent pas pour permettre aux descriptions audio de transmettre le sens de la vidéo préenregistrée, vérifiez qu'une description audio étendue est fournie, soit par le biais d'un script ou d'une autre version.",
      "1_2_8_G69,G159":
        "Si cet objet incorporé contient un média synchronisé pré-enregistré ou un contenu vidéo uniquement, vérifiez qu'une version texte alternative du contenu est fournie.",
      "1_2_9_G150,G151,G157":
        "Si cet objet incorporé contient du contenu audio en direct, vérifiez qu'une version texte alternative du contenu est fournie.",
      "1_3_1_F92,ARIA4":
        'Le rôle de cet élément est "présentation" mais contient des éléments enfants avec une signification sémantique.',
      "1_3_1_H44.NonExistent":
        "L'attribut \"for\" de cette étiquette contient un identifiant qui n'existe pas dans le document.",
      "1_3_1_H44.NonExistentFragment":
        "L'attribut \"for\" de cette étiquette contient un ID qui n'existe pas dans le fragment de document.",
      "1_3_1_H44.NotFormControl":
        "L'attribut \"for\" de cette étiquette contient un ID pour un élément qui n'est pas un contrôle de formulaire. Assurez-vous d'avoir saisi l'ID correct pour l'élément prévu.",
      "1_3_1_H65":
        'Ce contrôle de formulaire a un attribut "title" qui est vide ou ne contient que des espaces. Il sera ignoré à des fins de test d\'étiquetage.',
      "1_3_1_ARIA6":
        'Ce contrôle de formulaire possède un attribut "aria-label" qui est vide ou ne contient que des espaces. Il sera ignoré à des fins de test d\'étiquetage.',
      "1_3_1_ARIA16,ARIA9":
        "Ce contrôle de formulaire contient un attribut aria-labelledby, mais il inclut un ID \"{{id}}\" qui n'existe pas sur un élément. L'attribut aria-labelledby sera ignoré à des fins de test d'étiquetage.",
      "1_3_1_F68.Hidden":
        "Ce champ de formulaire caché est étiqueté d'une manière ou d'une autre. Il ne devrait pas être nécessaire d'étiqueter un champ de formulaire caché.",
      "1_3_1_F68.HiddenAttr":
        "Ce champ de formulaire est destiné à être masqué (à l'aide de l'attribut \"caché\"), mais il est également étiqueté d'une manière ou d'une autre. Il ne devrait pas être nécessaire d'étiqueter un champ de formulaire caché.",
      "1_3_1_F68":
        'Ce champ du formulaire doit être étiqueté d\'une manière ou d\'une autre. Utilisez l\'élément d\'étiquette (avec un attribut "for" ou enroulé autour du champ du formulaire), ou les attributs "title", "aria-label" ou "aria-labelledby" selon le cas.',
      "1_3_1_H49.":
        "Le balisage de présentation utilisé est devenu obsolète dans HTML5.",
      "1_3_1_H49.AlignAttr": "Aligner les attributs.",
      "1_3_1_H49.Semantic":
        "Le balisage sémantique doit être utilisé pour marquer un texte accentué ou un texte spécial afin qu'il puisse être déterminé par programmation.",
      "1_3_1_H49.AlignAttr.Semantic":
        "Le balisage sémantique doit être utilisé pour marquer un texte accentué ou un texte spécial afin qu'il puisse être déterminé par programmation.",
      "1_3_1_H42":
        "Une balise d'en-tête doit être utilisée si ce contenu est destiné à servir d'en-tête.",
      "1_3_1_H63.3":
        "La cellule de table a un attribut de portée invalide. Les valeurs valides sont ligne, col, groupe de lignes, groupe de lignes ou groupe de colonnes.",
      "1_3_1_H63.2":
        "Les attributs Scope sur les éléments td qui servent de titres pour d'autres éléments sont obsolètes dans HTML5. Utilisez un th élément à la place.",
      "1_3_1_H43.ScopeAmbiguous":
        "Les attributs de portée sur ces éléments sont ambigus dans un tableau à niveaux multiples d'en-têtes. Utilisez plutôt l'attribut headers sur les éléments td.",
      "1_3_1_H43.IncorrectAttr":
        'L\'attribut d\'en-tête incorrect sur cet élément td. Attendue "{{expected}}" mais trouvée "{{actual}}".',
      "1_3_1_H43.HeadersRequired":
        "La relation entre les éléments td et leurs éléments associés n'est pas définie. Comme cette table a plusieurs niveaux de ces éléments, vous devez utiliser l'attribut headers sur les éléments td.",
      "1_3_1_H43.MissingHeaderIds":
        "Tous les éléments de cette table ne contiennent pas un attribut id. Ces cellules devraient contenir des ids de sorte qu'elles puissent être référencées par des éléments td attributs d'en-têtes.",
      "1_3_1_H43.MissingHeadersAttrs":
        "Tous les éléments td de cette table ne contiennent pas un attribut d'en-tête. Chaque attribut d'en-tête devrait énumérer les ids de tous les éléments associés à cette cellule.",
      "1_3_1_H43,H63":
        "La relation entre les éléments td et leurs éléments associés n'est pas définie. Utilisez soit l'attribut scope sur ces éléments, soit l'attribut headers sur les éléments td.",
      "1_3_1_H63.1":
        "Tous les éléments de ce tableau n'ont pas tous un attribut de portée. Ces cellules doivent contenir un attribut scope pour identifier leur association avec les éléments td.",
      "1_3_1_H73.3.LayoutTable":
        "Ce tableau semble être utilisé pour la mise en page, mais contient un attribut résumé. Les tableaux de présentation ne doivent pas contenir d'attributs sommaires ou, s'ils sont fournis, doivent être vides.",
      "1_3_1_H39,H73.4":
        "Si ce tableau est un tableau de données et qu'un attribut résumé et un élément de légende sont présents, le résumé ne doit pas dupliquer la légende.",
      "1_3_1_H73.3.Check":
        "Si ce tableau est un tableau de données, vérifiez que l'attribut summary décrit l'organisation du tableau ou explique comment utiliser le tableau.",
      "1_3_1_H73.3.NoSummary":
        "Si ce tableau est un tableau de données, envisagez d'utiliser l'attribut résumé de l'élément de tableau pour donner une vue d'ensemble de ce tableau.",
      "1_3_1_H39.3.LayoutTable":
        "Ce tableau semble être utilisé pour la mise en page, mais contient un élément de légende. Les tables de présentation ne doivent pas contenir de légendes.",
      "1_3_1_H39.3.Check":
        "Si ce tableau est un tableau de données, vérifiez que l'élément de légende décrit correctement ce tableau.",
      "1_3_1_H39.3.NoCaption":
        "Si ce tableau est un tableau de données, envisagez d'utiliser un élément de légende de l'élément de tableau pour identifier ce tableau.",
      "1_3_1_H71.NoLegend":
        "Fieldset ne contient pas d'élément de légende. Tous les champs doivent contenir un élément de légende décrivant la description du groupe de champs.",
      "1_3_1_H85.2":
        "Si cette liste de sélection contient des groupes d'options connexes, ils doivent être regroupés avec le groupe optgroup.",
      "1_3_1_H71.SameName":
        "Si ces boutons radio ou cases à cocher nécessitent une description plus détaillée au niveau du groupe, ils doivent être contenus dans un élément de l'ensemble des champs.",
      "1_3_1_H48.1":
        "Ce contenu semble simuler une liste non ordonnée à l'aide de texte brut. Si c'est le cas, marquer ce contenu avec un élément ul ajouterait une information de structure appropriée au document.",
      "1_3_1_H48.2":
        "Ce contenu semble simuler une liste ordonnée à l'aide de texte brut. Si c'est le cas, marquer ce contenu avec un élément ol ajouterait des informations de structure appropriées au document.",
      "1_3_1_G141_a":
        "La structure d'en-tête n'est pas imbriquée logiquement. Cet élément h{{{headingNum}} semble être l'en-tête du document primaire, donc devrait être un élément h1.",
      "1_3_1_G141_b":
        "La structure d'en-tête n'est pas imbriquée logiquement. Cet élément h{{{headingNum}} devrait être un h{properHeadingNum}} pour être correctement imbriqué.",
      "1_3_1_H42.2":
        "Étiquette d'en-tête trouvée sans contenu. Le texte qui n'est pas destiné à servir d'en-tête ne doit pas être marqué avec des balises d'en-tête.",
      "1_3_1_H48":
        "Si cet élément contient une section de navigation, il est recommandé de le marquer comme une liste.",
      "1_3_1_LayoutTable":
        "Ce tableau semble être un tableau de présentation. S'il s'agit plutôt d'un tableau de données, assurez-vous que les cellules d'en-tête sont identifiées à l'aide de ces éléments.",
      "1_3_1_DataTable":
        "Ce tableau semble être un tableau de données. S'il s'agit plutôt d'un tableau de présentation, assurez-vous qu'il n'y a pas d'éléments, ni de résumé ou de légende\".",
      "1_3_2_G57":
        "Vérifiez que le contenu est ordonné dans un ordre significatif lorsqu'il est linéarisé, par exemple lorsque les feuilles de style sont désactivées.",
      "1_3_3_G96":
        "Lorsque des instructions sont fournies pour comprendre le contenu, ne vous fiez pas uniquement aux caractéristiques sensorielles (telles que la forme, la taille ou l'emplacement) pour décrire les objets.",
      "1_4_1_G14,G18":
        "Vérifier que toute information véhiculée par la couleur seule est également disponible sous forme de texte ou d'autres repères visuels.",
      "1_4_2_F23":
        "Si cet élément contient de l'audio qui joue automatiquement pendant plus de 3 secondes, vérifiez qu'il est possible de mettre en pause, d'arrêter ou de couper le son.",
      "1_4_3_F24.BGColour":
        "Vérifiez que cet élément a une couleur d'avant-plan héritée pour compléter la couleur ou l'image d'arrière-plan en ligne correspondante.",
      "1_4_3_F24.FGColour":
        "Vérifiez que cet élément a une couleur ou une image d'arrière-plan héritée pour compléter la couleur d'avant-plan correspondante.",
      "1_4_3_G18_or_G145.Abs":
        "Cet élément est absolument positionné et la couleur de fond ne peut pas être déterminée. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'arrière-plan est d'au moins {{nécessaire}}:1.",
      "1_4_3_G18_or_G145.BgImage":
        "Le texte de cet élément est placé sur une image de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'image est d'au moins {{nécessaire}}:1.",
      "1_4_3_G18_or_G145.Alpha":
        "Le texte ou l'arrière-plan de cet élément contient de la transparence. Assurez-vous que le rapport de contraste entre le texte et l'arrière-plan est d'au moins {{nécessaire}}:1.",
      "1_4_3_G18_or_G145.Fail":
        "Cet élément a un contraste insuffisant à ce niveau de conformité. On s'attendait à un rapport de contraste d'au moins {{required}}:1, mais le texte dans cet élément a un rapport de contraste de {{value}}:1.",
      "1_4_3_G18_or_G145.Fail.Recomendation": "Recommandation : changement",
      "1_4_3_G18_or_G145.Fail.Recomendation.Text": "Couleur du texte à",
      "1_4_3_G18_or_G145.Fail.Recomendation.Background": "Fond à",
      "1_4_4_G142":
        "Vérifiez que le texte peut être redimensionné sans technologie d'assistance jusqu'à 200 pour cent sans perte de contenu ou de fonctionnalité.",
      "1_4_5_G140,C22,C30.AALevel":
        "Si les technologies utilisées permettent d'obtenir une présentation visuelle, vérifiez que le texte est utilisé pour transmettre des informations plutôt que des images de texte, sauf lorsque l'image du texte est essentielle à l'information véhiculée, ou peut être visuellement adaptée aux besoins de l'utilisateur.",
      "1_4_6_G18_or_G17.Abs":
        "Cet élément est absolument positionné et la couleur de fond ne peut pas être déterminée. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'arrière-plan est d'au moins {{nécessaire}}:1.",
      "1_4_6_G18_or_G17.BgImage":
        "Le texte de cet élément est placé sur une image de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'image est d'au moins {{nécessaire}}:1.",
      "1_4_6_G18_or_G17.Fail":
        "Cet élément a un contraste insuffisant à ce niveau de conformité. On s'attendait à un rapport de contraste d'au moins {{required}}:1, mais le texte dans cet élément a un rapport de contraste de {{value}}:1.",
      "1_4_6_G18_or_G17.Fail.Recomendation": "Recommandation : changement",
      "1_4_6_G18_or_G17.Fail.Recomendation.Text": "Couleur du texte à",
      "1_4_6_G18_or_G17.Fail.Recomendation.Background": "Fond à",
      "1_4_7_G56":
        "Pour le contenu audio préenregistré de cet élément qui est principalement de la parole (comme la narration), tout bruit de fond devrait être muet, ou être au moins 20 dB (ou environ 4 fois plus silencieux que le discours).",
      "1_4_8_G148,G156,G175":
        "Vérifiez qu'il existe un mécanisme permettant à l'utilisateur de sélectionner les couleurs d'avant-plan et d'arrière-plan pour les blocs de texte, soit par l'intermédiaire de la page Web ou du navigateur.",
      "1_4_8_H87,C20":
        "Vérifiez qu'il existe un mécanisme permettant de réduire la largeur d'un bloc de texte à un maximum de 80 caractères (ou 40 en caractères chinois, japonais ou coréen).",
      "1_4_8_C19,G172,G169":
        "Vérifiez que les blocs de texte ne sont pas entièrement justifiés - c'est-à-dire à gauche et à droite - ou qu'il existe un mécanisme pour supprimer toute justification.",
      "1_4_8_G188,C21":
        "Vérifiez que l'interligne dans les blocs de texte est d'au moins 150% dans les paragraphes et que l'interligne est d'au moins 1,5 fois l'interligne ou qu'il existe un mécanisme pour y parvenir.",
      "1_4_8_H87,G146,C26":
        "Vérifiez que le texte peut être redimensionné sans technologie d'assistance jusqu'à 200 pour cent sans que l'utilisateur ait besoin de faire défiler horizontalement sur une fenêtre plein écran.",
      "1_4_9_G140,C22,C30.NoException":
        "Vérifier que les images de texte ne sont utilisées qu'à des fins de décoration pure ou lorsqu'une présentation particulière du texte est essentielle à l'information véhiculée.",
      "2_1_1_G90":
        "S'assurer que la fonctionnalité fournie par un gestionnaire d'événements pour cet élément est disponible par l'intermédiaire du clavier.",
      "2_1_1_SCR20.DblClick":
        "Assurez-vous que la fonctionnalité fournie en double-cliquant sur cet élément est disponible par l'intermédiaire du clavier.",
      "2_1_1_SCR20.MouseOver":
        "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement focus.",
      "2_1_1_SCR20.MouseOut":
        "Assurez-vous que la fonctionnalité fournie par la souris hors de cet élément est disponible par le clavier ; par exemple, en utilisant l'événement flou.",
      "2_1_1_SCR20.MouseMove":
        "Assurez-vous que la fonctionnalité fournie en déplaçant la souris sur cet élément est disponible par l'intermédiaire du clavier.",
      "2_1_1_SCR20.MouseDown":
        "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement keydown.",
      "2_1_1_SCR20.MouseUp":
        "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement keyup.",
      "2_1_2_F10":
        "Vérifiez que cette applet ou plugin permet d'éloigner le focus de lui-même lors de l'utilisation du clavier.",
      "2_2_1_F40.2":
        "Meta refresh tag utilisé pour rediriger vers une autre page, avec une limite de temps qui n'est pas nulle. Les utilisateurs ne peuvent pas contrôler cette limite de temps.",
      "2_2_1_F41.2":
        "Meta refresh tag utilisé pour rafraîchir la page courante. Les utilisateurs ne peuvent pas contrôler la limite de temps pour ce rafraîchissement.",
      "2_2_2_SCR33,SCR22,G187,G152,G186,G191":
        "Si une partie du contenu bouge, défile ou clignote pendant plus de 5 secondes, ou se met à jour automatiquement, vérifiez qu'il existe un mécanisme permettant de mettre en pause, d'arrêter ou de cacher le contenu.",
      "2_2_2_F4":
        "S'assurer qu'il existe un mécanisme permettant d'arrêter cet élément clignotant en moins de cinq secondes.",
      "2_2_2_F47":
        "Les éléments clignotants ne peuvent pas satisfaire à l'exigence selon laquelle les informations clignotantes peuvent être arrêtées en moins de cinq secondes.",
      "2_2_3_G5":
        "Vérifier que le chronométrage n'est pas une partie essentielle de l'événement ou de l'activité présentée par le contenu, à l'exception des médias synchronisés non interactifs et des événements en temps réel.",
      "2_2_4_SCR14":
        "Vérifier que toutes les interruptions (y compris les mises à jour du contenu) peuvent être reportées ou supprimées par l'utilisateur, à l'exception des interruptions impliquant une situation d'urgence.",
      "2_2_5_G105,G181":
        "Si cette page Web fait partie d'un ensemble de pages Web avec une limite de temps d'inactivité, vérifiez qu'un utilisateur authentifié peut poursuivre l'activité sans perte de données après la ré-authentification.",
      "2_3_1_G19,G176":
        "Vérifier qu'aucun composant du contenu ne clignote plus de trois fois au cours d'une période d'une seconde ou que la taille de la zone de clignotement est suffisamment petite.",
      "2_3_2_G19":
        "Vérifiez qu'aucun composant du contenu ne clignote plus de trois fois au cours d'une période d'une seconde.",
      "2_4_1_H64.1":
        "L'élément Iframe nécessite un attribut de titre non vide qui identifie la trame.",
      "2_4_1_H64.2":
        "Vérifiez que l'attribut title de cet élément contient du texte qui identifie le cadre.",
      "2_4_1_G1,G123,G124,H69":
        "Veiller à ce que tous les éléments de navigation communs puissent être contournés ; par exemple, en utilisant des liens de saut, des éléments d'en-tête ou des rôles de repère ARIA.",
      "2_4_1_G1,G123,G124.NoSuchID":
        'Ce lien pointe vers une ancre nommée "{{id}}" dans le document, mais aucune ancre n\'existe avec ce nom.',
      "2_4_1_G1,G123,G124.NoSuchIDFragment":
        'Ce lien pointe vers une ancre nommée "{{id}}" dans le document, mais aucune ancre n\'existe avec ce nom dans le fragment testé.',
      "2_4_2_H25.1.NoHeadEl":
        "Il n'y a pas de section d'en-tête dans laquelle placer un élément de titre descriptif.",
      "2_4_2_H25.1.NoTitleEl":
        "Un titre devrait être fourni pour le document, en utilisant un élément de titre non vide dans la section d'en-tête.",
      "2_4_2_H25.1.EmptyTitle":
        "L'élément de titre de la section d'en-tête ne doit pas être vide.",
      "2_4_2_H25.2": "Vérifier que l'élément de titre décrit le document.",
      "2_4_3_H4.2":
        "Si tabindex est utilisé, vérifiez que l'ordre des onglets spécifié par les attributs de tabindex suit les relations dans le contenu.",
      "2_4_4_H77,H78,H79,H80,H81,H33":
        "Vérifiez que le texte du lien combiné avec le contexte du lien déterminé par le programme, ou son attribut de titre, identifie le but du lien.",
      "2_4_4_H77,H78,H79,H80,H81":
        "Vérifiez que le texte du lien combiné avec le contexte du lien déterminé par le programme identifie le but du lien.",
      "2_4_5_G125,G64,G63,G161,G126,G185":
        "Si cette page Web ne fait pas partie d'un processus linéaire, vérifiez qu'il existe plus d'une façon de localiser cette page Web dans un ensemble de pages Web.",
      "2_4_6_G130,G131":
        "Vérifiez que les en-têtes et les étiquettes décrivent le sujet ou le but.",
      "2_4_7_G149,G165,G195,C15,SCR31":
        "Vérifiez qu'il existe au moins un mode de fonctionnement dans lequel l'indicateur de mise au point du clavier peut être placé visuellement sur les commandes de l'interface utilisateur.",
      "2_4_8_H59.1":
        "Les éléments de lien ne peuvent être situés que dans la section d'en-tête du document.",
      "2_4_8_H59.2a":
        "Il manque à l'élément Link un attribut rel non vide identifiant le type de lien.",
      "2_4_8_H59.2b":
        "L'élément Link manque un attribut href non vide pointant vers la ressource liée.",
      "2_4_9_H30": "Vérifiez que le texte du lien décrit l'objet du lien.",
      "3_1_1_H57.2":
        "L'élément html doit avoir un attribut lang ou xml:lang qui décrit la langue du document.",
      "3_1_1_H57.3.Lang":
        "La langue spécifiée dans l'attribut lang de l'élément de document ne semble pas être bien formée.",
      "3_1_1_H57.3.XmlLang":
        "La langue spécifiée dans l'attribut xml:lang de l'élément document ne semble pas être bien formée.",
      "3_1_2_H58":
        "Assurez-vous que tout changement de langue est marqué à l'aide de l'attribut lang et/ou xml:lang sur un élément, selon le cas.",
      "3_1_2_H58.1.Lang":
        "La langue spécifiée dans l'attribut lang de cet élément ne semble pas être bien formée.",
      "3_1_2_H58.1.XmlLang":
        "Le langage spécifié dans l'attribut xml:lang de cet élément ne semble pas être bien formé.",
      "3_1_3_H40,H54,H60,G62,G70":
        "Vérifier qu'il existe un mécanisme permettant d'identifier des définitions spécifiques de mots ou de phrases utilisés d'une manière inhabituelle ou restreinte, y compris les expressions idiomatiques et le jargon.",
      "3_1_4_G102,G55,G62,H28,G97":
        "Vérifier qu'il existe un mécanisme permettant d'identifier la forme élargie ou la signification des abréviations.",
      "3_1_5_G86,G103,G79,G153,G160":
        "Lorsque le contenu exige une capacité de lecture plus avancée que le niveau de l'enseignement secondaire inférieur, un contenu supplémentaire ou une version alternative devrait être fourni.",
      "3_1_6_H62.1.HTML5":
        "Ruby element does not contain an rt element containing prononciation information for its body text.",
      "3_1_6_H62.1.XHTML11":
        "Ruby element does not contain an rt element containing prononciation information for the text inside the rb element.",
      "3_1_6_H62.2":
        "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.",
      "3_2_1_G107":
        "Vérifier qu'il n'y a pas de changement de contexte lorsque ce champ de saisie reçoit le focus.",
      "3_2_2_H32.2":
        'Ce formulaire ne contient pas de bouton de soumission, ce qui crée des problèmes pour ceux qui ne peuvent pas soumettre le formulaire à l\'aide du clavier. Les boutons Submit sont des éléments INPUT avec l\'attribut de type "submit" ou "image", ou des éléments BUTTON avec le type "submit" ou omis/invalid.',
      "3_2_3_G61":
        "Vérifiez que les mécanismes de navigation qui sont répétés sur plusieurs pages Web se produisent dans le même ordre relatif chaque fois qu'ils sont répétés, à moins qu'un changement ne soit initié par l'utilisateur.",
      "3_2_4_G197":
        "Vérifier que les composants qui ont la même fonctionnalité dans cette page Web sont identifiés de manière cohérente dans l'ensemble des pages Web auxquelles ils appartiennent.",
      "3_2_5_H83.3":
        "Vérifiez que le texte du lien de ce lien contient des informations indiquant que le lien s'ouvrira dans une nouvelle fenêtre.",
      "3_3_1_G83,G84,G85":
        "Si une erreur de saisie est automatiquement détectée dans ce formulaire, vérifiez que le ou les éléments erronés sont identifiés et que l'erreur ou les erreurs sont décrites à l'utilisateur sous forme de texte.",
      "3_3_2_G131,G89,G184,H90":
        "Vérifier que les étiquettes descriptives ou les instructions (y compris pour les champs obligatoires) sont fournies pour l'entrée de l'utilisateur dans ce formulaire.",
      "3_3_3_G177":
        "Vérifier que ce formulaire fournit les corrections suggérées en cas d'erreurs dans les entrées des utilisateurs, à moins que cela ne compromette la sécurité ou l'objectif du contenu.",
      "3_3_4_G98,G99,G155,G164,G168.LegalForms":
        "Si ce formulaire lie un utilisateur à un engagement financier ou juridique, modifie/supprime des données contrôlables par l'utilisateur, ou soumet des réponses de test, assurez-vous que les soumissions sont réversibles, vérifiées pour les erreurs de saisie et/ou confirmées par l'utilisateur.",
      "3_3_5_G71,G184,G193":
        "Vérifiez que l'aide contextuelle est disponible pour ce formulaire, au niveau de la page Web et/ou du contrôle.",
      "3_3_6_G98,G99,G155,G164,G168.AllForms":
        "Vérifier que les soumissions à ce formulaire sont soit réversibles, soit vérifiées pour les erreurs de saisie, et/ou confirmées par l'utilisateur.",
      "4_1_1_F77":
        'Dupliquer la valeur de l\'attribut id "{{id}}" trouvée sur la page web.',
      "4_1_2_H91.A.Empty":
        "L'élément d'ancrage trouvé avec un ID mais sans href ou texte de lien. Envisager de déplacer son ID vers un élément parent ou un élément voisin.",
      "4_1_2_H91.A.EmptyWithName":
        "L'élément d'ancrage trouvé avec un attribut de nom mais sans href ou texte de lien. Envisagez de déplacer l'attribut de nom pour qu'il devienne l'ID d'un parent ou d'un élément voisin.",
      "4_1_2_H91.A.EmptyNoId":
        "Élément d'ancrage trouvé sans contenu de lien et sans nom et/ou attribut ID.",
      "4_1_2_H91.A.NoHref":
        "Les éléments d'ancrage ne doivent pas être utilisés pour définir des cibles de liens en page. Si vous n'utilisez pas l'ID à d'autres fins (comme le CSS ou le script), envisagez de le déplacer vers un élément parent",
      "4_1_2_H91.A.Placeholder":
        "L'élément d'ancrage trouvé avec le contenu du lien, mais aucun attribut href, ID ou nom n'a été fourni.",
      "4_1_2_H91.A.NoContent":
        "L'élément d'ancrage trouvé avec un attribut href valide, mais aucun contenu de lien n'a été fourni.",
      "4_1_2_input_element": "élément d'entrée",
      "4_1_2_role_of_button": 'l\'élément a un rôle de "bouton" mais',
      "4_1_2_element_content": "contenu de l'élément",
      "4_1_2_element": "élément",
      "4_1_2_msg_pattern":
        "Ce {{msgNodeType}} n'a pas de nom disponible pour une API d'accessibilité. Les noms valides le sont : {{builtAttrs}}.",
      "4_1_2_msg_pattern2":
        "Cette {{{msgNodeType}} n'a pas de valeur disponible pour une API d'accessibilité.",
      "4_1_2_msg_add_one": "Ajouter un en ajoutant du contenu à l'élément.",
      "4_1_2_msg_pattern3":
        "Cette {{msgNodeType}} n'a pas d'option initialement sélectionnée. Selon votre version HTML, la valeur exposée à une API d'accessibilité peut être indéfinie.",
      "4_1_2_value_exposed_using_attribute":
        "Une valeur est exposée à l'aide de l'attribut {{requiredValue}}.",
      "4_1_2_value_exposed_using_element":
        "Une valeur est exposée à l'aide de l'élément {{requiredValue}}."
    }),
    (_global.translation.pl = {
      auditor_name: "Squiz HTML_CodeSniffer",
      auditor_using_standard: "Używany standard",
      auditor_standards: "Standardy",
      auditor_code_snippet: "Fragment kodu",
      auditor_close: "Zamknij",
      auditor_select_types: "Wybierz typy błędów, które mają być w raporcie",
      auditor_home: "Home",
      auditor_view_report: "Zobacz Raport",
      auditor_report: "Raport",
      auditor_back_to_report: "Powrót do Raportu",
      auditor_previous_issue: "Poprzedni Problem",
      auditor_next_issue: "Następny Problem",
      auditor_issue: "Problem",
      auditor_of: "z",
      auditor_errors: "Błędy",
      auditor_error: "Błąd",
      auditor_warnings: "Ostrzeżenia",
      auditor_warning: "Ostrzeżenie",
      auditor_notices: "Uwagi",
      auditor_notice: "Uwaga",
      auditor_toggle_display_of: "Przełącz wyświetlanie",
      auditor_messages: "komunikatów",
      auditor_unable_to_point:
        "Nie można wskazać elementu powiązanego z tym kryterium.",
      auditor_unable_to_point_entire:
        "Nie można wskazać tego problemu, ponieważ dotyczy on całego dokumentu.",
      auditor_unable_to_point_removed:
        "Nie można wskazać tego elementu, ponieważ został on usunięty z dokumentu od momentu wygenerowania raportu.",
      auditor_unable_to_point_outside:
        "Nie można wskazać tego elementu, ponieważ znajduje się poza elementem treści dokumentu.",
      auditor_unable_to_point_hidden:
        "Nie można wskazać tego elementu, ponieważ jest on niewidoczny lub nie ma reprezentacji wizualnej.",
      auditor_point_to_element: "Pokaż element",
      auditor_unsupported_browser:
        "Funkcja nie jest obsługiwana w tej przeglądarce.",
      auditor_page: "Strona",
      auditor_updated_to: "HTML_CodeSniffer został zaktualizowany do wersji",
      auditor_view_the_changelog: "Zobacz dziennik zmian",
      auditor_success_criterion: "Kryteria sukcesu",
      auditor_suggested_techniques: "Sugerowane techniki",
      auditor_applies_entire_document: "Dotyczy to całego dokumentu",
      "1_1_1_H30.2":
        "Grafika jest jedyną treścią linku i powinna zostać uzupełniona o opis alternatywny opisujący jego funkcję.",
      "1_1_1_H67.1":
        "Grafika pełni funkcję dekoracyjną zarówno atrybut alt jak i title powinny być puste.",
      "1_1_1_H67.2":
        "Grafika jest oznaczona jako dekoracyjna i będzie ignorowana przez technologie wspomagające np. czytniki ekranu dla osób niewidomych.",
      "1_1_1_H37":
        "Znacznik <img> nie ma atrybutu alt. Dodaj ten atrybut i wpisz do niego krótki opis grafiki.",
      "1_1_1_G94.Image":
        "Upewnij się, że opis alternatywny grafiki przekazuje tę samą informację, co sama grafika.",
      "1_1_1_H36":
        "Przycisk graficzny nie ma atrybutu alt. Dodaj do przycisku atrybut alt i opisz w nim funkcję przycisku.",
      "1_1_1_G94.Button":
        "Upewnij się, że opis alternatywny przycisku prawidłowo opisuje funkcję przycisku.",
      "1_1_1_H24":
        "Element <area> w mapie obrazkowej nie ma atrybutu alt. Każdy taki obszar powinien mieć atrybut alt z opisem alternatywnym, który odpowiednio opisuje dany obszar.",
      "1_1_1_H24.2":
        "Upewnij się, że opis alternatywny obszaru <area> odpowiada jego funkcji lub treści.",
      "1_1_1_G73,G74":
        "Jeśli krótki opis alternatywny nie opisuje wystarczająco treści prezentowanej przez grafikę, dodaj rozszerzony opis bezpośrednio na stronie lub na oddzielnej stronie.",
      "1_1_1_H2.EG5":
        "Opis alternatywny elementu <img> umieszczonego wewnątrz linku, nie może być taki sam jak tekst samego linku.",
      "1_1_1_H2.EG4":
        "Element <img> znajdujący się wewnątrz linku nie ma atrybutu alt lub alt jest pusty. Ponieważ w sąsiedztwie znajduje się link tekstowy zaleca się połączenie tych elementów w jedno łącze ze wspólnym opisem.",
      "1_1_1_H2.EG3":
        "Element <img> znajdujący się wewnątrz linku nie może mieć opisu alternatywnego tej samej treści, co link tekstowy znajdujący się w jego sąsiedztwie.",
      "1_1_1_H53,ARIA6":
        "Element <object> musi zawierać atrybut alt z wprowadzonym opisem alternatywnym o ile nie została zapewniony żaden inny alternatywny opis tego elementu.",
      "1_1_1_G94,G92.Object,ARIA6":
        "Należy sprawdzić czy krótkie lub długie teksty alternatywne są dostępne dla wszystkich elementów nietekstowych i możliwie najdokładniej je opisują.",
      "1_1_1_H35.3":
        "<applet> powinien zawierać opis alternatywny wewnątrz znaczników <object>. Zapewni to alternatywę w przeglądarkach, które nie obsługują elementu <applet>.",
      "1_1_1_H35.2":
        "Applet powinien mieć opis alternatywny w atrybucie alt, aby zapewnić wsparcie w przypadku problemów z załadowaniem zawartości.",
      "1_1_1_G94,G92.Applet":
        "Należy sprawdzić czy krótkie lub długie teksty alternatywne są dostępne dla wszystkich elementów nietekstowych i możliwie najdokładniej je opisują.",
      "1_2_1_G158":
        "Treść przedstawiona w sposób dźwiękowy powinna zostać uzupełniona dodatkową transkrypcją lub opisem alternatywnym.",
      "1_2_1_G159,G166":
        "Jeśli obiekt wideo (bez dźwięku) zamieszczony na stronie nie jest alternatywą dla tekstu, sprawdź czy istnieje do niego alternatywa tekstowa lub ścieżka dźwiękowa prezentująca tę samą treść.",
      "1_2_2_G87,G93":
        "Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź czy materiał ma napisy dla niesłyszących.",
      "1_2_3_G69,G78,G173,G8":
        "Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź czy materiał zawiera dodatkowo audiodeskrypcję obrazu i/lub opis alternatywny dla treści przedstawionych wyłącznie w formie obrazu.",
      "1_2_4_G9,G87,G93":
        "Sprawdź czy materiał wideo prezentowany na żywo ma napisy dla niesłyszących tworzone na żywo.",
      "1_2_5_G78,G173,G8":
        "Sprawdź czy materiał wideo ma dołączoną audiodeskrypcję obrazu.",
      "1_2_6_G54,G81":
        "Sprawdź czy materiał wideo ma dołączone tłumaczenie na język migowy.",
      "1_2_7_G8":
        "Jeśli materiał wideo, nie ma wystarczających pauz, by uzupełnić go o audiodeskrypcję, sprawdź czy zamieszczona jest alternatywna wersja lub rozszerzona ścieżka dźwiękowa.",
      "1_2_8_G69,G159":
        "Sprawdź czy materiał wideo lub wideo (sam obraz) jest umieszczony wraz z alternatywą tekstową.",
      "1_2_9_G150,G151,G157":
        "Sprawdź czy material audio przekazywany na żywo jest umieszczony wraz z wersją tekstową tworzoną na żywo.",
      "1_3_1_F92,ARIA4":
        'Ten element ma przypisaną rolę "prezentacja" ale zawiera też konkretne treści.',
      "1_3_1_H44.NonExistent":
        'Atrybut "for" znacznika <label> zawiera identyfikator pola, które nie istnieje na stronie.',
      "1_3_1_H44.NonExistentFragment":
        'Atrybut "for" znacznika <label> zawiera identyfikator pola, które nie istnieje w tym obszarze strony.',
      "1_3_1_H44.NotFormControl":
        'Atrybut "for" znacznika <label> zawiera identyfikator, który jest przypisany do elementu nie będącego elementem formulrza. Sprawdź czy identyfikator został umieszczony w odpowiednim znaczniku.',
      "1_3_1_H65":
        'Element formularza zawiera atrybut "title" bez treści lub z samymi spacjami / odstępami. Taki title nie będzie uwzględniany jako prawidłowa etykieta.',
      "1_3_1_ARIA6":
        'To pole formularza ma atrybut "aria-label" bez treści lub z samymi spacjami / odstępami. Taki atrybut nie będzie uwzględniany jako prawidłowa etykieta.',
      "1_3_1_ARIA16,ARIA9":
        'To pole formularza ma atrybut "aria-labelledby. Jednak jego ID "{{id}}" nie istnieje w żadnym elemencie. Taki atrybut nie będzie uwzględniany jako opis pola.',
      "1_3_1_F68.Hidden":
        "To ukryte pole ma etykietę (opis). Nie ma potrzeby dodawania etykiety do ukrytego pola.",
      "1_3_1_F68.HiddenAttr":
        'To pole ma z zasady być ukryte (za pomocą atrybutu "hidden"). Nie ma potrzeby dodawania etykiety do ukrytego pola.',
      "1_3_1_F68":
        'Pole formularza powinno posiadać opis bądź etykietę. Zaleca się dodanie atrybutów "title", "aria-label" lub "aria-labelledby" bądź  elementu label (z atrybutem "for" wskajuącym na to pole) .',
      "1_3_1_H49.":
        "Znaczniki prezentacyjne użyte w kodzie są przestarzałe w HTML5.",
      "1_3_1_H49.AlignAttr": "Align attributes.",
      "1_3_1_H49.Semantic":
        "Do wyróżnienia tekstu powinny zostać użyte odpowiednie znaczniki.",
      "1_3_1_H49.AlignAttr.Semantic":
        "Do wyróżnienia tekstu powinny zostać użyte odpowiednie znaczniki.",
      "1_3_1_H42":
        "Jeśli ten fragment treści miał być nagłówkiem, powinny zostać użyte znaczniki nagłówków (h1 – h6).",
      "1_3_1_H63.3":
        'W komórce tabeli użyto niewłaściwy atrybut "scope". Dopuszczalne atrybuty to: "ow", "col", "rowgroup" i "colgroup".',
      "1_3_1_H63.2":
        "Atrybuty scope używane na komórkach tabeli (<td>) aby oznaczyć nagłówek są przestarzałe w HTML5. Zaleca się skorzystanie ze znacznika <th>.",
      "1_3_1_H43.ScopeAmbiguous":
        'Użycie atrybutów scope na elementach th jest niejasne w tabeli z wieloma nagłówkami. Rekomenduje się użycie atrybutu "headers" w znaczniku <td>.',
      "1_3_1_H43.IncorrectAttr":
        'Nieprawidłowy atrybut nagłówka w znaczniku <td>. Zamiast "{{actual}}" powinien być "{{expected}}".',
      "1_3_1_H43.HeadersRequired":
        'Nie zdefiniowano relacji pomiędzy komórką <td> a powiązanym z nią nagłówkiem <th>. Wskazana tabela ma wiele poziomów <th>, zatem należałoby użyć atrybutu "headers" w komórkach <td>.',
      "1_3_1_H43.MissingHeaderIds":
        'Nie wszystkie nagłówki th w tej tabeli posiadają atrybut "id" i nie będzie się można do nich odwołać za pomocą atrybutu "headers" w znacznikach <td>.',
      "1_3_1_H43.MissingHeadersAttrs":
        "Nie wszystkie komórki <td> w tej tabeli posiadają atrybut headers. W atrybucie headers powinny znajdować się identyfikatory powiązanych nagłówków.",
      "1_3_1_H43,H63":
        'Komórki <td> nie mają ustalonej relacji z komórkami nagłówkowymi <th>. Należy zdefiniować atryb "scope" dla <th> lub "headers" dla <td>.',
      "1_3_1_H63.1":
        'Nie wszystkie komórki <th> w tej tabeli posiadają atrybut "scope". Ten atrybut pozwala powiązać nagłówki <th> z odpowiednimi komórkami <td>.',
      "1_3_1_H73.3.LayoutTable":
        "Tabela jest prawdopodobnie używana do struktury układu graficznego ale zawiera atrybut summary. Tabele używane do budowania struktury strony nie mieć tego atrybutu.",
      "1_3_1_H39,H73.4":
        'Jeśli tabela zawiera treści i zastosowano w niej atrybut "summary" i znacznik <caption>. Treści tego atrybutu i znacznika nie mogą być powielone.',
      "1_3_1_H73.3.Check":
        'Jeśli ta tabela zawiera dane, sprawdź czy atrybut "summary" opisuje układ tabeli oraz wyjaśnia jak jej użyć.',
      "1_3_1_H73.3.NoSummary":
        'Jeśli ta tabela zawiera dane, rozważ użycie atrybutu "summary" jako podsumowania zawartości tabeli.',
      "1_3_1_H39.3.LayoutTable":
        "Ta tabela wydaje się być przeznaczona do prezentacji układu strony, ale zawiera opis <caption>. Tabele przeznaczone do układu nie mogą zawierać opisu.",
      "1_3_1_H39.3.Check":
        "Jeśli ta tabela zawiera dane, sprawdź czy <caption> zawiera jej adekwatny opis.",
      "1_3_1_H39.3.NoCaption":
        "Jeśli ta tabela zawiera dane, powinna być uzupełniona o opis w znaczniku <caption>.",
      "1_3_1_H71.NoLegend":
        "Fieldset nie ma opisu w formie <legend>. Wszystkim znacznikom <fieldset> powinny towarzyszyć opisy w znaczniku <legend>.",
      "1_3_1_H85.2":
        "Jeśli listy wyboru stanowią grupę, powinny być zgrupowane elementem <optgroup>.",
      "1_3_1_H71.SameName":
        'Jeśli te pola "checkbox" i "radio" są powiązane, powinny być zgrupowane znacznikiem <fieldset>.',
      "1_3_1_H48.1":
        "Treść przypomina listę nieuporządkowaną. Jeśli jest to lista nieuporządkowana powinna być oznaczona odpowiednimi znacznikami <ul>.",
      "1_3_1_H48.2":
        "Treść przypomina listę uporządkowaną. Jeśli jest to lista uporządkowana powinna być oznaczona odpowiednimi znacznikami <ol>.",
      "1_3_1_G141_a":
        "Kolejność nagłówków nie jest poprawnie uporządkowana. Element h{{headingNum}} umieszczony jest jako pierwszy więc powinien być oznaczony jako h1.",
      "1_3_1_G141_b":
        "Kolejność nagłówków nie jest poprawnie uporządkowana. Nagłówek h{{headingNum}} powinien być oznaczony jako h{{properHeadingNum}}.",
      "1_3_1_H42.2":
        "Nagłówek nie posiada tekstu. Tekst, który nie ma funkcji nagłówka nie powinien być oznaczony znacznikami do określania nagłówków.",
      "1_3_1_H48":
        "Jeśli ten element zawiera nawigację, zaleca się aby został oznaczony jako lista np. przy użyciu listy nieuporządkowanej <ul>.",
      "1_3_1_LayoutTable":
        "Ta tabela wydaje się być przeznaczona do prezentacji układu strony. Jeśli jest inaczej, powinna zawierać nagłówki pod postacią <th>.",
      "1_3_1_DataTable":
        'Jeżeli tabela jest wykorzystywana do tworzenia układu strony, nie powinna posiadać komórek <th> oraz atrybutu "summary" ani znacznika z opisem <caption>.',
      "1_3_2_G57":
        "Struktura i ułożenie elementów powinny oddawać sens strony i informacji.",
      "1_3_3_G96":
        "Sprawdź czy przekazane instrukcje nie opierają się tylko na właściwościach postrzegalnych przez zmysły takich jak kształt, wielkość czy umiejscowienie.",
      "1_4_1_G14,G18":
        "Informacje przekazywane za pomocą kolorów powinny być również zapisywane w treści lub mieć inną postać alternatywną.",
      "1_4_2_F23":
        "Jeżeli materiał audo włączany jest automatycznie i trwa dłużej niż trzy sekundy należy umożliwić zatrzymanie bądź wyciszenie odtwarzania.",
      "1_4_3_F24.BGColour":
        "Sprawdź czy kolor tekstu odpowiada pod względem wymagań kontrastu kolorowi lub obrazkowi tła.",
      "1_4_3_F24.FGColour":
        "Sprawdź czy kolor elementu ma taki kolor tła lub w formie obrazka, który pasuje kontrastowo do elementu inline z tekstem.",
      "1_4_3_G18_or_G145.Abs":
        "Ten element jest pozycjonowany absolutnie i nie jest możliwe zweryfikowanie jego kontrastu. Sprawdź samodzielnie czy kontrast jest na wystarczającym poziomie: {{required}}:1.",
      "1_4_3_G18_or_G145.BgImage":
        "Tekst elementu wyświetlany jest na obrazku. Należy upewnić się, że stosunek kontrastu tekstu do tła wynosi co najmniej {{required}}:1.",
      "1_4_3_G18_or_G145.Alpha":
        "Tekst lub tło tego elementu jest przezroczyste. Upewnij się, że współczynnik kontrastu między tekstem a tłem wynosi co najmniej {{required}}:1.",
      "1_4_3_G18_or_G145.Fail":
        "Ten element ma niewystarczający na tym poziomie zgodności stosunek kontrastu tekstu do tła. Powinien wynosić co najmniej {{required}}:1, a tekst umieszczony w tym elemencie posiada stosunek {{value}}:1.",
      "1_4_3_G18_or_G145.Fail.Recomendation": "Zalecenie: zmiana",
      "1_4_3_G18_or_G145.Fail.Recomendation.Text": "koloru tekstu na",
      "1_4_3_G18_or_G145.Fail.Recomendation.Background": "koloru tła na",
      "1_4_4_G142":
        "Należy upewnić się, że tekst na stronie może być powiększony do 200% bez użycia technologii wspomagających.",
      "1_4_5_G140,C22,C30.AALevel":
        "Sprawdź czy stosowane technologie pozwalają na użycie tekstu w graficznej formie. Treść powinna być przekazana w formie tekstu, chyba że graficzna forma tekstu jest istotna z punktu widzenia samej informacji, która jest przekazywana.",
      "1_4_6_G18_or_G17.Abs":
        "Ten element jest pozycjonowany absolutnie i nie jest możliwe zweryfikowanie jego kontrastu. Sprawdź samodzielnie czy kontrast jest na wystarczającym poziomie: {{required}}:1.",
      "1_4_6_G18_or_G17.BgImage":
        "Tekst elementu wyświetlany jest na obrazku. Należy upewnić się, że stosunek kontrastu tekstu do tła wynosi conajmniej {{required}}:1.",
      "1_4_6_G18_or_G17.Fail":
        "Ten element ma niewystarczający stosunek kontrastu tekstu do tła. Powinien wynosić co najmniej {{required}}:1, a tekst umieszczony w tym elemencie posiada stosunek {{value}}:1.",
      "1_4_6_G18_or_G17.Fail.Recomendation": "Zalecenie: zmiana",
      "1_4_6_G18_or_G17.Fail.Recomendation.Text": "koloru tekstu na",
      "1_4_6_G18_or_G17.Fail.Recomendation.Background": "koloru tła na",
      "1_4_7_G56":
        "Materiał audio, w którym występuje głównie mowa powinien mieć możliwość wyciszenia dźwięków tła lub narracja powinna być przynajmniej o 4 razy(20dB) głośniejsza niż tło.",
      "1_4_8_G148,G156,G175":
        "Kolor tekstu oraz kolor tła powinny być możliwe do zmiany przez użytkownika na samej stronie lub poprzez funkcje przeglądarki. ",
      "1_4_8_H87,C20":
        "Szerokość bloku tekstowego nie powinna przekraczać 80 znaków (40 w przypadku alfabetów: chińskiego, japońskiego i koreańskiego).",
      "1_4_8_C19,G172,G169":
        "Tekst nie powinien być wyjustowany (tzn. wyrównany do prawego i lewego marginesu). Ewentualnie powinien istnieć mechanizm, który pozwala usunąć wyjustowanie.",
      "1_4_8_G188,C21":
        "Odstępy między wierszami w akapitach powinny wynosić  przynajmniej 1,5 wysokości linii, a odległość między akapitami powinna być przynajmniej 1,5 razy większa niż ta pomiędzy wierszami. ",
      "1_4_8_H87,G146,C26":
        "Tekst na stronie powinien mieć możliwość powiększenia do 200% bez użycia technologii wspomagających. Nie powinno być też wymagane scrollowanie dolnym paskiem ekranu przy takim ustawieniu i zmaksymalizowanym oknie przeglądarki.",
      "1_4_9_G140,C22,C30.NoException":
        "Sprawdź czy teksty w formie grafiki pełnią wyłącznie funkcję dekoracyjną lub „graficzna” prezentacja tekstu ma znaczenie z uwagi na treść przekazywanej informacji.",
      "2_1_1_G90":
        "Cała treść oraz wszystkie zawarte w niej funkcjonalności powinny być dostępne przy użyciu klawiatury.",
      "2_1_1_SCR20.DblClick":
        "Funkcjonalność dostępna po dwukrotnym kliknięciu przyciskiem myszy, również powinna być dostępna przy użyciu klawiatury.",
      "2_1_1_SCR20.MouseOver":
        "Funkcjonalność dostępna po najechaniu kursorem myszy na element, również powinna być dostępna przy użyciu klawiatury.",
      "2_1_1_SCR20.MouseOut":
        "Funkcjonalność dostępna po opuszczeniu kursorem myszy elementu, również powinna być dostępna przy użyciu klawiatury.",
      "2_1_1_SCR20.MouseMove":
        "Funkcjonalność dostępna z wykorzystaniem ruchów myszą, również powinna być dostępna przy użyciu klawiatury.",
      "2_1_1_SCR20.MouseDown":
        "Funkcjonalność dostępna po wciśnięciu przycisku myszy, również powinna być dostępna przy użyciu klawiatury.",
      "2_1_1_SCR20.MouseUp":
        "Funkcjonalność dostępna po zwolnieniu przycisku myszy, również powinna być dostępna przy użyciu klawiatury.",
      "2_1_2_F10":
        "Sprawdź czy plugin lub applet pozwalają na uwolnienie fokusu, jeśli przejdzie on do tych funkcjonalności.",
      "2_2_1_F40.2":
        'Tag <meta> z atrybutem "redirect" przekierowuje na inną stronę w czesie określonym jako 0. Użytkownicy nie mają kontroli w taki krótkim czasie.',
      "2_2_1_F41.2":
        'Tag <meta> z atrybutem "refresh" odświeża aktualną stronę. Użytkownicy nie mają kontroli nad tym odświeżaniem.',
      "2_2_2_SCR33,SCR22,G187,G152,G186,G191":
        "Jeśli na stronie znajduje się element dynamiczny, animujący się dłużej niż 5 sekund powinien być mechanizm umożliwiający zatrzymanie tego efektu.",
      "2_2_2_F4":
        "Jeśli element miga dłużej niż 5 sekund powinien być mechanizm, który umożliwi zatrzymanie migania.",
      "2_2_2_F47":
        "Element <blink> nie spełnia wymagania o zatrzymaniu się migania w czasie 5 sekund.",
      "2_2_3_G5":
        "Sprawdź czy w serwisie nie występują ograniczenia czasowe, w działaniach użytkownika, chyba że dotyczy to odtwarzania plików multimedialnych lub działań transmitowanych na żywo.",
      "2_2_4_SCR14":
        "Sprawdź czy wszelkie przerwy lub przeszkody (np. automatyczna aktualizacja treści), mogą być wyłączone lub opóźnione przez użytkownika — chyba, że dotyczy to nagłych przypadków.",
      "2_2_5_G105,G181":
        "Jeśli użytkownik zostanie wylogowany w trakcie procesu (np. krokowego), powinien mieć możliwość do powrotu do tego samego stanu procesu, w jakim był wcześniej.",
      "2_3_1_G19,G176":
        "Elementy strony nie mogą błyskać częściej niż trzy razy w ciągu sekundy oraz jednocześnie obszar migający jest jak najmniejszy.",
      "2_3_2_G19":
        "Elementy strony nie mogą migać częściej niż trzy razy w ciągu sekundy.",
      "2_4_1_H64.1":
        'Ramka <iframe> musi posiadać tytuł. Należy wypełnić atrybut "title" i zawrzeć w nim opis ramki.',
      "2_4_1_H64.2":
        "Tytuł ramki <iframe> powinień opisywać ją w możliwie najdokładniejszy sposób.",
      "2_4_1_G1,G123,G124,H69":
        "Sprawdź czy użytkownik może pominąć powtarzającą się nawigację. Można to zapewnić przez użycie skip-linków, nagłówków lub punktów orientacyjnych ARIA.",
      "2_4_1_G1,G123,G124.NoSuchID":
        "Ten link wskazuje identyfikator {{id}} ale takiego identyfikatora w dokumencie nie ma.",
      "2_4_1_G1,G123,G124.NoSuchIDFragment":
        "Ten link wskazuje identyfikator {{id}} w dokumencie, ale takiego identyfikatora w testowanym obszarze nie ma.",
      "2_4_2_H25.1.NoHeadEl":
        "Strona nie ma tytułu. Należy dodać znacznik <title> do sekcji nagłówkowej strony.",
      "2_4_2_H25.1.NoTitleEl":
        "Strona nie ma tytułu. Należy dodać znacznik <title> do sekcji nagłówkowej strony lub wypełnić jego treść.",
      "2_4_2_H25.1.EmptyTitle":
        "Znacznik <title> w sekcji nagłówkowej strony nie powinien być pusty.",
      "2_4_2_H25.2":
        "Znacznik <title> w sekcji nagłówkowej strony powinien możliwie najdokładniej opisywać jej zawartość.",
      "2_4_3_H4.2":
        'Jeśli został użyty atrybut "tabindex", relacje i następstwo treści są zrozumiałe dla użytkownika.',
      "2_4_4_H77,H78,H79,H80,H81,H33":
        'Sprawdź czy treść linku wraz z kontekstem, w którym występuje lub dodatkową treścią w atrybucie "title" pozwala na zrozumienie funkcji / celu linku.',
      "2_4_4_H77,H78,H79,H80,H81":
        "Sprawdź czy treść linku wraz z kontekstem, w którym występuje pozwala na zrozumienie funkcji / celu linku.",
      "2_4_5_G125,G64,G63,G161,G126,G185":
        "Jeśli strona nie jest częścią procesu krokowego, sprawdź czy jest więcej niż jeden sposób na dotarcie do tej strony.",
      "2_4_6_G130,G131":
        "Nagłówki i etykiety powinny opisywać temat i/lub cel treści.",
      "2_4_7_G149,G165,G195,C15,SCR31":
        "Każdy element możliwy do nawigacji za pomocą klawiatury, ma widoczny wskaźnik fokusu klawiatury.",
      "2_4_8_H59.1":
        "Znacznik <link> może być umieszczony wyłącznie w sekcji <head>.",
      "2_4_8_H59.2a":
        'Znacznik <link> nie ma atrybutu "rel", którego wartość wskazuje na typ i powiązanie linku.',
      "2_4_8_H59.2b":
        'Znacznik <link> nie ma adresu w atrybucie "href" — nie prowadzi do żadnego zasobu.',
      "2_4_9_H30": "Sprawdź czy treść linku zrozumiale opisuje jego funkcję.",
      "3_1_1_H57.2":
        'Znacznik <html> musi posiadać atrybut "lang" określający język strony.',
      "3_1_1_H57.3.Lang":
        'Język zdefiniowany w atrybucie "lang" nie mógł zostać poprawnie zinterpretowany.',
      "3_1_1_H57.3.XmlLang":
        'Język zdefiniowany w atrybucie "xml:lang" nie mógł zostać poprawnie zinterpretowany. ',
      "3_1_2_H58":
        'Każda zmiana języka w treściach strony powinna być oznaczona atrybutem "lang" lub "xml:lang".',
      "3_1_2_H58.1.Lang":
        'Język zdefiniowany w atrybucie "lang" tego elementu nie mógł zostać poprawnie zinterpretowany.',
      "3_1_2_H58.1.XmlLang":
        'Język zdefiniowany w atrybucie "xml:lang" tego elementu nie mógł zostać poprawnie zinterpretowany.',
      "3_1_3_H40,H54,H60,G62,G70":
        "Sprawdź czy jest zapewniony mechanizm, za pomocą którego można sprawdzić definicje słów użytych w nietypowy sposób, co odnosi się też do idiomów i żargonu.",
      "3_1_4_G102,G55,G62,H28,G97":
        "Sprawdź czy jest zapewniony mechanizm, za pomocą którego można sprawdzić znaczenie skrótów w ich rozwiniętej formie.",
      "3_1_5_G86,G103,G79,G153,G160":
        "Jeśli dany tekst wymaga umiejętności czytania na poziomie wyższym niż poziom gimnazjalny, powinna być dostępna jego dodatkowa, uproszczona wersja.",
      "3_1_6_H62.1.HTML5":
        "Element <ruby> nie zawiera znacznika znacznika <rt>, który opisuje sposób wymowy.",
      "3_1_6_H62.1.XHTML11":
        "Element <ruby> nie zawiera znacznika <rt>, który opisuje sposób wymowy treści umieszczonej wewnątrz znacznika <rb>.",
      "3_1_6_H62.2":
        "Element <ruby> nie zawiera znacznika <rp>, który zapewnia wsparcie dla przeglądarek niewspierających treści w znacznikach <ruby>.",
      "3_2_1_G107":
        "Sprawdź czy po przenieseniu fokusu na dany element formularza nie następuje zaskakująca dla użytkownika zmiana kontekstu (np. przeniesienie na inną stronę).",
      "3_2_2_H32.2":
        'Formularz nie ma przycisku do zatwierdzania wysyłki. Może to sprawić problem użytkownikom posługującym się wyłącznie klawiaturą. Przycisk może mieć formę elementu <input> z atrybutem "submit" lub "image" lub elementem <button>.',
      "3_2_3_G61":
        "Sprawdź czy powtarzające się na stronach elementy nawigacyjne są umieszczone w tej samej kolejności. Dopuszczalne jest zmiana kolejności przez samego użytkownika.",
      "3_2_4_G197":
        "Elementy, które posiadają tę samą funkcjonalność, muszą być zidentyfikowane/oznaczone w ten sam sposób na wszystkich stronach serwisu.",
      "3_2_5_H83.3":
        "Linki otwierające się w nowym oknie lub karcie przeglądarki powinny mieć taką informację w swojej treści.",
      "3_3_1_G83,G84,G85":
        "Jeśli przy wpisywaniu informacji, błąd zostanie wykryty automatycznie, system powinien wskazać błędny element, a użytkownik otrzymać opis błędu w postaci tekstu.",
      "3_3_2_G131,G89,G184,H90":
        "Jeżeli wymagane jest wprowadzenie treści przez użytkownika, powinny być dostępne zrozumiałe instrukcje i wskazówki.",
      "3_3_3_G177":
        "Jeśli przy wpisywaniu informacji błąd zostanie wykryty automatycznie, użytkownik powinien otrzymać sugestię korekty, chyba że wpłynie to negatywnie na bezpieczeństwo systemu.",
      "3_3_4_G98,G99,G155,G164,G168.LegalForms":
        "Sprawdź czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie. Jest to szczególnie ważne w sytuacji, gdy użytkownik podaje informacje prawne lub finansowe.",
      "3_3_5_G71,G184,G193":
        "Sprawdź czy w formularzu jest dostępna pomoc kontekstowa na samej stronie lub na stronie służącej do potwierdzenia wprowadzonych treści.",
      "3_3_6_G98,G99,G155,G164,G168.AllForms":
        "Sprawdź czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie.",
      "4_1_1_F77":
        'Na stronie znaleziono powieloną wartość "{{id}}". Dopuszczalne jest jedno wystąpienie wartości identyfikatora.',
      "4_1_2_H91.A.Empty":
        'Link ma atrybut "id", nie ma jednak ani adresu w atrybucie "href" ani treści. Rozważ przeniesienie identyfikatora do elementu nadrzędnego.',
      "4_1_2_H91.A.EmptyWithName":
        'Link ma atrybut "name", ale nie ma ani adresu ani treści. Rozważ przeniesienie wartości atrybutu "name" do identyfikatora elementu nadrzędnego jako "id".',
      "4_1_2_H91.A.EmptyNoId":
        "Link nie ma treści, ani nazwy ani identyfikatora.",
      "4_1_2_H91.A.NoHref":
        "Link nie powinien być używany do tworzenia wewnętrznych odniesień na stronie. Jeśli identyfikator jest używany do styli CSS lub oskryptowania JS, rozważ przeniesienie identyfikatora od elementu nadrzędnego (rodzica).",
      "4_1_2_H91.A.Placeholder":
        'Link ma jedynie treść. Brakuje adresu w atrybucie "href", identyfikatora ani nazwy (atrybutu "name").',
      "4_1_2_H91.A.NoContent":
        'Link ma prawidłowy adres w atrybucie "href" ale nie ma treści linku.',
      "4_1_2_input_element": "pole formularza",
      "4_1_2_role_of_button": 'element ma rolę "button" ale',
      "4_1_2_element_content": "zawartość elementu",
      "4_1_2_element": "element",
      "4_1_2_msg_pattern":
        '{{msgNodeType}} nie posiada prawidłowej nazwy (np. atrybutu) dla "accessibility API". Dopuszczalne opcje to: {{builtAttrs}}',
      "4_1_2_msg_pattern2":
        '{{msgNodeType}} nie ma wartości, która mogłaby być dostępna dla "accessibility API".',
      "4_1_2_msg_add_one": "Add one by adding content to the element.",
      "4_1_2_msg_pattern3":
        "This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.",
      "4_1_2_value_exposed_using_attribute":
        "A value is exposed using the {{requiredValue}} attribute.",
      "4_1_2_value_exposed_using_element":
        "A value is exposed using the {{requiredValue}} element."
    }),
    (_global.HTMLCS_Section508 = {
      name: "Section508",
      description: "U.S. Section 508 Standard",
      sniffs: [
        "A",
        "B",
        "C",
        "D",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P"
      ],
      getMsgInfo: function(e) {
        return [
          ["Section", "1194.22 (" + e.split(".", 3)[1].toLowerCase() + ")"]
        ];
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_A = {
      register: function() {
        return ["_top", "img", "object", "bgsound", "audio"];
      },
      process: function(e, t) {
        if (e === t)
          this.addNullAltTextResults(t), this.addMediaAlternativesResults(t);
        else {
          var n = e.nodeName.toLowerCase();
          ("object" !== n && "bgsound" !== n && "audio" !== n) ||
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
              "Audio"
            );
        }
      },
      testNullAltText: function(e) {
        var t = {
          img: {
            generalAlt: [],
            missingAlt: [],
            ignored: [],
            nullAltWithTitle: [],
            emptyAltInLink: []
          },
          inputImage: { generalAlt: [], missingAlt: [] },
          area: { generalAlt: [], missingAlt: [] }
        };
        elements = HTMLCS.util.getAllElements(
          e,
          'img, area, input[type="image"]'
        );
        for (var n = 0; n < elements.length; n++) {
          var i = elements[n],
            a = i.nodeName.toLowerCase(),
            r = !1,
            o = !1,
            s = !1;
          if ("a" === i.parentNode.nodeName.toLowerCase()) {
            var l = HTMLCS.util.getPreviousSiblingElement(i, null),
              u = HTMLCS.util.getNextSiblingElement(i, null);
            if (null === l && null === u) {
              var d = i.parentNode.textContent;
              if (void 0 !== i.parentNode.textContent)
                d = i.parentNode.textContent;
              else d = i.parentNode.innerText;
              !0 === HTMLCS.util.isStringEmpty(d) && (r = !0);
            }
          }
          switch (
            (!1 === i.hasAttribute("alt")
              ? (o = !0)
              : (i.getAttribute("alt") &&
                  !0 !== HTMLCS.util.isStringEmpty(i.getAttribute("alt"))) ||
                (s = !0),
            a)
          ) {
            case "img":
              !0 !== r || (!0 !== o && !0 !== s)
                ? !0 === o
                  ? t.img.missingAlt.push(i)
                  : !0 === s
                  ? !0 === i.hasAttribute("title") &&
                    !1 === HTMLCS.util.isStringEmpty(i.getAttribute("title"))
                    ? t.img.nullAltWithTitle.push(i)
                    : t.img.ignored.push(i)
                  : t.img.generalAlt.push(i)
                : t.img.emptyAltInLink.push(i.parentNode);
              break;
            case "input":
              !0 === o || !0 === s
                ? t.inputImage.missingAlt.push(i)
                : t.inputImage.generalAlt.push(i);
              break;
            case "area":
              !0 === o || !0 === s
                ? t.area.missingAlt.push(i)
                : t.inputImage.generalAlt.push(i);
          }
        }
        return t;
      },
      addNullAltTextResults: function(e) {
        for (
          var t = this.testNullAltText(e), n = 0;
          n < t.img.emptyAltInLink.length;
          n++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.emptyAltInLink[n],
            "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
            "Img.EmptyAltInLink"
          );
        for (n = 0; n < t.img.nullAltWithTitle.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.nullAltWithTitle[n],
            "Img element with empty alt text must have absent or empty title attribute.",
            "Img.NullAltWithTitle"
          );
        for (n = 0; n < t.img.ignored.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.img.ignored[n],
            "Img element is marked so that it is ignored by Assistive Technology.",
            "Img.Ignored"
          );
        for (n = 0; n < t.img.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.missingAlt[n],
            "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
            "Img.MissingAlt"
          );
        for (n = 0; n < t.img.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.img.generalAlt[n],
            "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
            "Img.GeneralAlt"
          );
        for (n = 0; n < t.inputImage.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.inputImage.missingAlt[n],
            "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
            "InputImage.MissingAlt"
          );
        for (n = 0; n < t.inputImage.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.inputImage.generalAlt[n],
            "Ensure that the image submit button's alt text identifies the purpose of the button.",
            "InputImage.GeneralAlt"
          );
        for (n = 0; n < t.area.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.area.missingAlt[n],
            "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
            "Area.MissingAlt"
          );
        for (n = 0; n < t.area.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.area.generalAlt[n],
            "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
            "Area.GeneralAlt"
          );
      },
      testMediaTextAlternatives: function(e) {
        for (
          var t = {
              object: { missingBody: [], generalAlt: [] },
              applet: { missingBody: [], missingAlt: [], generalAlt: [] }
            },
            n = HTMLCS.util.getAllElements(e, "object"),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i];
          if (null === a.querySelector("object"))
            "" === (o = HTMLCS.util.getElementTextContent(a, !0))
              ? t.object.missingBody.push(a)
              : t.object.generalAlt.push(a);
        }
        for (
          n = HTMLCS.util.getAllElements(e, "applet"), i = 0;
          i < n.length;
          i++
        ) {
          var r = !1;
          if (null === a.querySelector("object")) {
            var o = HTMLCS.util.getElementTextContent(a, !0);
            !0 === HTMLCS.util.isStringEmpty(o) &&
              (t.applet.missingBody.push(a), (r = !0));
          }
          var s = a.getAttribute("alt") || "";
          !0 === HTMLCS.util.isStringEmpty(s) &&
            (t.applet.missingAlt.push(a), (r = !0)),
            !1 === r && t.applet.generalAlt.push(a);
        }
        return t;
      },
      addMediaAlternativesResults: function(e) {
        for (
          var t = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1.testMediaTextAlternatives(
              e
            ),
            n = 0;
          n < t.object.missingBody.length;
          n++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.object.missingBody[n],
            "Object elements must contain a text alternative after all other alternatives are exhausted.",
            "Object.MissingBody"
          );
        for (n = 0; n < t.object.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.object.generalAlt[n],
            "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
            "Object.GeneralAlt"
          );
        for (n = 0; n < t.applet.missingBody.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.applet.missingBody[n],
            "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
            "Applet.MissingBody"
          );
        for (n = 0; n < t.applet.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.applet.missingAlt[n],
            "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
            "Applet.MissingAlt"
          );
        for (n = 0; n < t.applet.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.applet.generalAlt[n],
            "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
            "Applet.GeneralAlt"
          );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_B = {
      register: function() {
        return ["object", "applet", "embed", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
          "Video"
        ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
            "Captions"
          );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_C = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
          "Colour"
        );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_D = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        e === t &&
          (HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
            "Linearised"
          ),
          this.testPresentationMarkup(t),
          this.testHeadingOrder(t),
          0 <
            HTMLCS.util.getAllElements(t, 'script, link[rel="stylesheet"]')
              .length &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              t,
              'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
              "HiddenText"
            ));
      },
      testPresentationMarkup: function(e) {
        _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testPresentationMarkup(
          e
        );
      },
      testHeadingOrder: function(e) {
        for (
          var t = 0,
            n = HTMLCS.util.getAllElements(e, "h1, h2, h3, h4, h5, h6"),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = parseInt(n[i].nodeName.substr(1, 1));
          if (1 < a - t) {
            var r = "should be an h" + (t + 1) + " to be properly nested";
            0 === t &&
              (r =
                "appears to be the primary document heading, so should be an h1 element"),
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                n[i],
                "The heading structure is not logically nested. This h" +
                  a +
                  " element " +
                  r +
                  ".",
                "HeadingOrder"
              );
          }
          t = a;
        }
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_G = {
      register: function() {
        return ["table"];
      },
      process: function(e, t) {
        !0 === HTMLCS.util.isLayoutTable(e) &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
            "TableHeaders"
          );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_H = {
      register: function() {
        return ["table"];
      },
      process: function(e, t) {
        for (
          var n = HTMLCS.util.testTableHeaders(e), i = 0;
          i < n.wrongHeaders.length;
          i++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            n.wrongHeaders[i].element,
            'Incorrect headers attribute on this td element. Expected "' +
              n.wrongHeaders[i].expected +
              '" but found "' +
              n.wrongHeaders[i].actual +
              '"',
            "IncorrectHeadersAttr"
          );
        !0 === n.required &&
          !1 === n.allowScope &&
          (!1 === n.used
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
                "MissingHeadersAttrs"
              )
            : (0 < n.missingThId.length &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
                  "MissingHeaderIds"
                ),
              0 < n.missingTd.length &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
                  "IncompleteHeadersAttrs"
                )));
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_I = {
      register: function() {
        return ["frame", "iframe", "object"];
      },
      process: function(e, t) {
        var n = e.nodeName.toLowerCase(),
          i = !0;
        !0 === e.hasAttribute("title") &&
          (i = HTMLCS.util.isStringEmpty(e.getAttribute("title"))),
          !0 === i &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              t,
              "This " +
                n +
                " element is missing title text. Frames should be titled with text that facilitates frame identification and navigation.",
              "Frames"
            );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_J = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
          "Flicker"
        );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_K = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
          "AltVersion"
        );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_L = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        e === t && (this.addProcessLinksMessages(t), this.testKeyboard(t));
      },
      addProcessLinksMessages: function(e) {
        for (var t = this.processLinks(e), n = 0; n < t.emptyNoId.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.emptyNoId[n],
            "Anchor element found with no link content and no name and/or ID attribute.",
            "EmptyAnchorNoId"
          );
        for (n = 0; n < t.placeholder.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.placeholder[n],
            "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
            "PlaceholderAnchor"
          );
        for (n = 0; n < t.noContent.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.noContent[n],
            "Anchor element found with a valid href attribute, but no link content has been supplied.",
            "NoContentAnchor"
          );
      },
      processLinks: function(e) {
        for (
          var t = {
              empty: [],
              emptyWithName: [],
              emptyNoId: [],
              noHref: [],
              placeholder: [],
              noContent: []
            },
            n = HTMLCS.util.getAllElements(e, "a"),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i],
            r = !1,
            o = HTMLCS.util.getElementTextContent(a);
          !0 === a.hasAttribute("href") &&
            !1 === /^\s*$/.test(a.getAttribute("href")) &&
            (r = !0),
            !1 === r
              ? !0 === /^\s*$/.test(o)
                ? !0 === a.hasAttribute("id")
                  ? t.empty.push(a)
                  : !0 === a.hasAttribute("name")
                  ? t.emptyWithName.push(a)
                  : t.emptyNoId.push(a)
                : !0 === a.hasAttribute("id") || !0 === a.hasAttribute("name")
                ? t.noHref.push(a)
                : t.placeholder.push(a)
              : !0 === /^\s*$/.test(o) &&
                0 === a.querySelectorAll("img").length &&
                t.noContent.push(a);
        }
        return t;
      },
      testKeyboard: function(e) {
        for (
          var t = HTMLCS.util.getAllElements(e, "*[ondblclick]"), n = 0;
          n < t.length;
          n++
        )
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t[n],
            "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
            "DblClick"
          );
        var i = HTMLCS.util.getAllElements(e, "*[onmouseover]");
        for (n = 0; n < i.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            i[n],
            "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
            "MouseOver"
          );
        var a = HTMLCS.util.getAllElements(e, "*[onmouseout]");
        for (n = 0; n < a.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            a[n],
            "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
            "MouseOut"
          );
        var r = HTMLCS.util.getAllElements(e, "*[onmousemove]");
        for (n = 0; n < r.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            r[n],
            "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
            "MouseMove"
          );
        var o = HTMLCS.util.getAllElements(e, "*[onmousedown]");
        for (n = 0; n < o.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            o[n],
            "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
            "MouseDown"
          );
        var s = HTMLCS.util.getAllElements(e, "*[onmouseup]");
        for (n = 0; n < s.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            s[n],
            "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
            "MouseUp"
          );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_M = {
      register: function() {
        return ["object", "applet", "bgsound", "embed", "audio", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
          "PluginLink"
        );
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_N = {
      register: function() {
        return ["form"];
      },
      process: function(e, t) {
        "form" === e.nodeName.toLowerCase() &&
          (HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
            "Errors"
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
            "Labels"
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
            "KeyboardNav"
          ));
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_O = {
      register: function() {
        return ["_top", "a", "area"];
      },
      process: function(e, t) {
        if (e === t)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
            "SkipLinks"
          );
        else if (!0 === e.hasAttribute("href")) {
          var n = e.getAttribute("href");
          if (1 < (n = HTMLCS.util.trim(n)).length && "#" === n.charAt(0)) {
            var i = n.substr(1);
            try {
              var a = t;
              a.ownerDocument && (a = a.ownerDocument);
              var r = a.getElementById(i);
              null === r && (r = a.querySelector('a[name="' + i + '"]')),
                (null !== r && !1 !== HTMLCS.util.contains(t, r)) ||
                  (!0 === HTMLCS.isFullDoc(t) ||
                  "body" === t.nodeName.toLowerCase()
                    ? HTMLCS.addMessage(
                        HTMLCS.ERROR,
                        e,
                        'This link points to a named anchor "' +
                          i +
                          '" within the document, but no anchor exists with that name.',
                        "NoSuchID"
                      )
                    : HTMLCS.addMessage(
                        HTMLCS.WARNING,
                        e,
                        'This link points to a named anchor "' +
                          i +
                          '" within the document, but no anchor exists with that name in the fragment tested.',
                        "NoSuchIDFragment"
                      ));
            } catch (e) {}
          }
        }
      }
    }),
    (_global.HTMLCS_Section508_Sniffs_P = {
      register: function() {
        return ["_top", "meta"];
      },
      process: function(e, t) {
        e === t
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              t,
              "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
              "TimeLimit"
            )
          : !0 === e.hasAttribute("http-equiv") &&
            "refresh" === String(e.getAttribute("http-equiv")).toLowerCase() &&
            !0 === /^[1-9]\d*/.test(e.getAttribute("content").toLowerCase()) &&
            (!0 === /url=/.test(e.getAttribute("content").toLowerCase())
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
                  "MetaRedirect"
                )
              : HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
                  "MetaRefresh"
                ));
      }
    }),
    (_global.HTMLCS_WCAG2A = {
      name: "WCAG2A",
      description: "Web Content Accessibility Guidelines (WCAG) 2.0 A",
      sniffs: [
        {
          standard: "WCAG2AAA",
          include: [
            "Principle1.Guideline1_1.1_1_1",
            "Principle1.Guideline1_2.1_2_1",
            "Principle1.Guideline1_2.1_2_2",
            "Principle1.Guideline1_2.1_2_3",
            "Principle1.Guideline1_3.1_3_1",
            "Principle1.Guideline1_3.1_3_1_A",
            "Principle1.Guideline1_3.1_3_2",
            "Principle1.Guideline1_3.1_3_3",
            "Principle1.Guideline1_4.1_4_1",
            "Principle1.Guideline1_4.1_4_2",
            "Principle2.Guideline2_1.2_1_1",
            "Principle2.Guideline2_1.2_1_2",
            "Principle2.Guideline2_2.2_2_1",
            "Principle2.Guideline2_2.2_2_2",
            "Principle2.Guideline2_3.2_3_1",
            "Principle2.Guideline2_4.2_4_1",
            "Principle2.Guideline2_4.2_4_2",
            "Principle2.Guideline2_4.2_4_3",
            "Principle2.Guideline2_4.2_4_4",
            "Principle3.Guideline3_1.3_1_1",
            "Principle3.Guideline3_2.3_2_1",
            "Principle3.Guideline3_2.3_2_2",
            "Principle3.Guideline3_3.3_3_1",
            "Principle3.Guideline3_3.3_3_2",
            "Principle4.Guideline4_1.4_1_1",
            "Principle4.Guideline4_1.4_1_2"
          ]
        }
      ],
      getMsgInfo: function(e) {
        return HTMLCS_WCAG2AAA.getMsgInfo(e);
      }
    }),
    (_global.HTMLCS_WCAG2AA = {
      name: "WCAG2AA",
      description: "Web Content Accessibility Guidelines (WCAG) 2.0 AA",
      sniffs: [
        {
          standard: "WCAG2AAA",
          include: [
            "Principle1.Guideline1_1.1_1_1",
            "Principle1.Guideline1_2.1_2_1",
            "Principle1.Guideline1_2.1_2_2",
            "Principle1.Guideline1_2.1_2_4",
            "Principle1.Guideline1_2.1_2_5",
            "Principle1.Guideline1_3.1_3_1",
            "Principle1.Guideline1_3.1_3_1_A",
            "Principle1.Guideline1_3.1_3_2",
            "Principle1.Guideline1_3.1_3_3",
            "Principle1.Guideline1_4.1_4_1",
            "Principle1.Guideline1_4.1_4_2",
            "Principle1.Guideline1_4.1_4_3",
            "Principle1.Guideline1_4.1_4_3_F24",
            "Principle1.Guideline1_4.1_4_3_Contrast",
            "Principle1.Guideline1_4.1_4_4",
            "Principle1.Guideline1_4.1_4_5",
            "Principle2.Guideline2_1.2_1_1",
            "Principle2.Guideline2_1.2_1_2",
            "Principle2.Guideline2_2.2_2_1",
            "Principle2.Guideline2_2.2_2_2",
            "Principle2.Guideline2_3.2_3_1",
            "Principle2.Guideline2_4.2_4_1",
            "Principle2.Guideline2_4.2_4_2",
            "Principle2.Guideline2_4.2_4_3",
            "Principle2.Guideline2_4.2_4_4",
            "Principle2.Guideline2_4.2_4_5",
            "Principle2.Guideline2_4.2_4_6",
            "Principle2.Guideline2_4.2_4_7",
            "Principle3.Guideline3_1.3_1_1",
            "Principle3.Guideline3_1.3_1_2",
            "Principle3.Guideline3_2.3_2_1",
            "Principle3.Guideline3_2.3_2_2",
            "Principle3.Guideline3_2.3_2_3",
            "Principle3.Guideline3_2.3_2_4",
            "Principle3.Guideline3_3.3_3_1",
            "Principle3.Guideline3_3.3_3_2",
            "Principle3.Guideline3_3.3_3_3",
            "Principle3.Guideline3_3.3_3_4",
            "Principle4.Guideline4_1.4_1_1",
            "Principle4.Guideline4_1.4_1_2"
          ]
        }
      ],
      getMsgInfo: function(e) {
        return HTMLCS_WCAG2AAA.getMsgInfo(e);
      }
    }),
    (_global.HTMLCS_WCAG2AAA = {
      name: "WCAG2AAA",
      description: "Web Content Accessibility Guidelines (WCAG) 2.0 AAA",
      sniffs: [
        "Principle1.Guideline1_1.1_1_1",
        "Principle1.Guideline1_2.1_2_1",
        "Principle1.Guideline1_2.1_2_2",
        "Principle1.Guideline1_2.1_2_4",
        "Principle1.Guideline1_2.1_2_5",
        "Principle1.Guideline1_2.1_2_6",
        "Principle1.Guideline1_2.1_2_7",
        "Principle1.Guideline1_2.1_2_8",
        "Principle1.Guideline1_2.1_2_9",
        "Principle1.Guideline1_3.1_3_1",
        "Principle1.Guideline1_3.1_3_1_AAA",
        "Principle1.Guideline1_3.1_3_2",
        "Principle1.Guideline1_3.1_3_3",
        "Principle1.Guideline1_4.1_4_1",
        "Principle1.Guideline1_4.1_4_2",
        "Principle1.Guideline1_4.1_4_3_F24",
        "Principle1.Guideline1_4.1_4_3_Contrast",
        "Principle1.Guideline1_4.1_4_6",
        "Principle1.Guideline1_4.1_4_7",
        "Principle1.Guideline1_4.1_4_8",
        "Principle1.Guideline1_4.1_4_9",
        "Principle2.Guideline2_1.2_1_1",
        "Principle2.Guideline2_1.2_1_2",
        "Principle2.Guideline2_2.2_2_2",
        "Principle2.Guideline2_2.2_2_3",
        "Principle2.Guideline2_2.2_2_4",
        "Principle2.Guideline2_2.2_2_5",
        "Principle2.Guideline2_3.2_3_2",
        "Principle2.Guideline2_4.2_4_1",
        "Principle2.Guideline2_4.2_4_2",
        "Principle2.Guideline2_4.2_4_3",
        "Principle2.Guideline2_4.2_4_5",
        "Principle2.Guideline2_4.2_4_6",
        "Principle2.Guideline2_4.2_4_7",
        "Principle2.Guideline2_4.2_4_8",
        "Principle2.Guideline2_4.2_4_9",
        "Principle3.Guideline3_1.3_1_1",
        "Principle3.Guideline3_1.3_1_2",
        "Principle3.Guideline3_1.3_1_3",
        "Principle3.Guideline3_1.3_1_4",
        "Principle3.Guideline3_1.3_1_5",
        "Principle3.Guideline3_1.3_1_6",
        "Principle3.Guideline3_2.3_2_1",
        "Principle3.Guideline3_2.3_2_2",
        "Principle3.Guideline3_2.3_2_3",
        "Principle3.Guideline3_2.3_2_4",
        "Principle3.Guideline3_2.3_2_5",
        "Principle3.Guideline3_3.3_3_1",
        "Principle3.Guideline3_3.3_3_2",
        "Principle3.Guideline3_3.3_3_3",
        "Principle3.Guideline3_3.3_3_5",
        "Principle3.Guideline3_3.3_3_6",
        "Principle4.Guideline4_1.4_1_1",
        "Principle4.Guideline4_1.4_1_2"
      ],
      getMsgInfo: function(e) {
        for (
          var t = {
              Principle1: {
                name: "Perceivable",
                link: "http://www.w3.org/TR/WCAG20/#perceivable"
              },
              Principle2: {
                name: "Operable",
                link: "http://www.w3.org/TR/WCAG20/#operable"
              },
              Principle3: {
                name: "Understandable",
                link: "http://www.w3.org/TR/WCAG20/#understandable"
              },
              Principle4: {
                name: "Robust",
                link: "http://www.w3.org/TR/WCAG20/#robust"
              }
            },
            n = {
              CR2: { name: "Full pages", landmark: "cc2", priority: 0 },
              CR3: { name: "Complete processes", landmark: "cc3", priority: 0 },
              CR4: {
                name: "Only Accessibility-Supported Ways of Using Technologies",
                landmark: "cc4",
                priority: 0
              },
              CR5: { name: "Non-Interference", landmark: "cc5", priority: 0 },
              "1.1.1": {
                name: "Non-Text Content",
                landmark: "text-equiv-all",
                priority: 1
              },
              "1.2.1": {
                name: "Audio-only and Video-only (Prerecorded)",
                landmark: "media-equiv-av-only-alt",
                priority: 1
              },
              "1.2.2": {
                name: "Captions (Prerecorded)",
                landmark: "media-equiv-captions",
                priority: 1
              },
              "1.2.3": {
                name: "Audio Description or Media Alternative (Prerecorded)",
                landmark: "media-equiv-audio-desc",
                priority: 1
              },
              "1.2.4": {
                name: "Captions (Live)",
                landmark: "media-equiv-captions",
                priority: 2
              },
              "1.2.5": {
                name: "Audio Description (Prerecorded)",
                landmark: "media-equiv-audio-desc",
                priority: 2
              },
              "1.2.6": {
                name: "Sign Language (Prerecorded)",
                landmark: "media-equiv-sign",
                priority: 3
              },
              "1.2.7": {
                name: "Extended Audio Description (Prerecorded)",
                landmark: "media-equiv-extended-ad",
                priority: 3
              },
              "1.2.8": {
                name: "Media Alternative (Prerecorded)",
                landmark: "media-equiv-text-doc",
                priority: 3
              },
              "1.2.9": {
                name: "Audio-only (Live)",
                landmark: "media-equiv-live-audio-only",
                priority: 3
              },
              "1.3.1": {
                name: "Info and Relationships",
                landmark: "content-structure-separation-programmatic",
                priority: 1
              },
              "1.3.2": {
                name: "Meaningful Sequence",
                landmark: "content-structure-separation-sequence",
                priority: 1
              },
              "1.3.3": {
                name: "Sensory Characteristics",
                landmark: "content-structure-separation-understanding",
                priority: 1
              },
              "1.4.1": {
                name: "Use of Colour",
                landmark: "visual-audio-contrast-without-color",
                priority: 1
              },
              "1.4.2": {
                name: "Audio Control",
                landmark: "visual-audio-contrast-dis-audio",
                priority: 1
              },
              "1.4.3": {
                name: "Contrast (Minimum)",
                landmark: "visual-audio-contrast-contrast",
                priority: 1
              },
              "1.4.4": {
                name: "Resize Text",
                landmark: "visual-audio-contrast-scale",
                priority: 1
              },
              "1.4.5": {
                name: "Images of Text",
                landmark: "visual-audio-contrast-text-presentation",
                priority: 1
              },
              "1.4.6": {
                name: "Contrast (Enhanced)",
                landmark: "visual-audio-contrast7",
                priority: 3
              },
              "1.4.7": {
                name: "Low or No Background Audio",
                landmark: "visual-audio-contrast-noaudio",
                priority: 3
              },
              "1.4.8": {
                name: "Visual Presentation",
                landmark: "visual-audio-contrast-visual-presentation",
                priority: 3
              },
              "1.4.9": {
                name: "Images of Text (No Exception)",
                landmark: "visual-audio-contrast-text-images",
                priority: 3
              },
              "2.1.1": {
                name: "Keyboard",
                landmark: "keyboard-operation-keyboard-operable",
                priority: 1
              },
              "2.1.2": {
                name: "No Keyboard Trap",
                landmark: "keyboard-operation-trapping",
                priority: 1
              },
              "2.1.3": {
                name: "Keyboard (No Exception)",
                landmark: "keyboard-operation-all-funcs",
                priority: 3
              },
              "2.2.1": {
                name: "Timing Adjustable",
                landmark: "time-limits-required-behaviors",
                priority: 1
              },
              "2.2.2": {
                name: "Pause, Stop, Hide",
                landmark: "time-limits-pause",
                priority: 1
              },
              "2.2.3": {
                name: "No Timing",
                landmark: "time-limits-no-exceptions",
                priority: 3
              },
              "2.2.4": {
                name: "Interruptions",
                landmark: "time-limits-postponed",
                priority: 3
              },
              "2.2.5": {
                name: "Re-authenticating",
                landmark: "time-limits-server-timeout",
                priority: 3
              },
              "2.3.1": {
                name: "Three Flashes or Below Threshold",
                landmark: "seizure-does-not-violate",
                priority: 1
              },
              "2.3.2": {
                name: "Three Flashes",
                landmark: "seizure-three-times",
                priority: 3
              },
              "2.4.1": {
                name: "Bypass Blocks",
                landmark: "navigation-mechanisms-skip",
                priority: 1
              },
              "2.4.2": {
                name: "Page Titled",
                landmark: "navigation-mechanisms-title",
                priority: 1
              },
              "2.4.3": {
                name: "Focus Order",
                landmark: "navigation-mechanisms-focus-order",
                priority: 1
              },
              "2.4.4": {
                name: "Link Purpose (In Context)",
                landmark: "navigation-mechanisms-refs",
                priority: 1
              },
              "2.4.5": {
                name: "Multiple Ways",
                landmark: "navigation-mechanisms-mult-loc",
                priority: 2
              },
              "2.4.6": {
                name: "Headings and Labels",
                landmark: "navigation-mechanisms-descriptive",
                priority: 2
              },
              "2.4.7": {
                name: "Focus Visible",
                landmark: "navigation-mechanisms-focus-visible",
                priority: 2
              },
              "2.4.8": {
                name: "Location",
                landmark: "navigation-mechanisms-location",
                priority: 3
              },
              "2.4.9": {
                name: "Link Purpose (Link Only)",
                landmark: "navigation-mechanisms-link",
                priority: 3
              },
              "2.4.10": {
                name: "Section Headings",
                landmark: "navigation-mechanisms-headings",
                priority: 3
              },
              "3.1.1": {
                name: "Language of Page",
                landmark: "meaning-doc-lang-id",
                priority: 1
              },
              "3.1.2": {
                name: "Language of Parts",
                landmark: "meaning-other-lang-id",
                priority: 2
              },
              "3.1.3": {
                name: "Unusual Words",
                landmark: "meaning-idioms",
                priority: 3
              },
              "3.1.4": {
                name: "Abbreviations",
                landmark: "meaning-located",
                priority: 3
              },
              "3.1.5": {
                name: "Reading Level",
                landmark: "meaning-supplements",
                priority: 3
              },
              "3.1.6": {
                name: "Pronunciation",
                landmark: "meaning-pronunciation",
                priority: 3
              },
              "3.2.1": {
                name: "On Focus",
                landmark: "consistent-behavior-receive-focus",
                priority: 1
              },
              "3.2.2": {
                name: "On Input",
                landmark: "consistent-behavior-unpredictable-change",
                priority: 1
              },
              "3.2.3": {
                name: "Consistent Navigation",
                landmark: "consistent-behavior-consistent-locations",
                priority: 2
              },
              "3.2.4": {
                name: "Consistent Navigation",
                landmark: "consistent-behavior-consistent-functionality",
                priority: 2
              },
              "3.2.5": {
                name: "Change on Request",
                landmark: "consistent-behavior-no-extreme-changes-context",
                priority: 3
              },
              "3.3.1": {
                name: "Error Identification",
                landmark: "minimize-error-identified",
                priority: 1
              },
              "3.3.2": {
                name: "Labels or Instructions",
                landmark: "minimize-error-cues",
                priority: 1
              },
              "3.3.3": {
                name: "Error Suggestion",
                landmark: "minimize-error-suggestions",
                priority: 2
              },
              "3.3.4": {
                name: "Error Prevention (Legal, Financial, Data)",
                landmark: "minimize-error-reversible",
                priority: 2
              },
              "3.3.5": {
                name: "Help",
                landmark: "minimize-error-context-help",
                priority: 3
              },
              "3.3.6": {
                name: "Error Prevention (All)",
                landmark: "minimize-error-reversible-all",
                priority: 3
              },
              "4.1.1": {
                name: "Parsing",
                landmark: "ensure-compat-parses",
                priority: 1
              },
              "4.1.2": {
                name: "Name, Role, Value",
                landmark: "ensure-compat-rsv",
                priority: 1
              }
            },
            i = e.split(".", 5),
            a = i[1],
            r = i[3]
              .split("_")
              .slice(0, 3)
              .join("."),
            o = i[4].split(","),
            s = [],
            l = 0;
          l < o.length;
          l++
        )
          (o[l] = o[l].split(".")),
            s.push(
              '<a href="http://www.w3.org/TR/WCAG20-TECHS/' +
                o[l][0] +
                '" target="_blank">' +
                o[l][0] +
                "</a>"
            );
        var u = [
          '<a href="http://www.w3.org/TR/WCAG20/#' + n[r].landmark,
          '" target="_blank">',
          r,
          ": ",
          n[r].name,
          "</a>"
        ].join("");
        ['<a href="', t[a].link, '" target="_blank">', t[a].name, "</a>"].join(
          ""
        );
        return [
          [_global.HTMLCS.getTranslation("auditor_success_criterion"), u],
          [
            _global.HTMLCS.getTranslation("auditor_suggested_techniques"),
            s.join(" ")
          ]
        ];
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1 = {
      register: function() {
        return ["_top", "img"];
      },
      process: function(e, t) {
        if (e === t)
          this.addNullAltTextResults(t), this.addMediaAlternativesResults(t);
        else
          switch (e.nodeName.toLowerCase()) {
            case "img":
              this.testLinkStutter(e), this.testLongdesc(e);
          }
      },
      addNullAltTextResults: function(e) {
        for (
          var t = this.testNullAltText(e), n = 0;
          n < t.img.emptyAltInLink.length;
          n++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.emptyAltInLink[n],
            _global.HTMLCS.getTranslation("1_1_1_H30.2"),
            "H30.2"
          );
        for (n = 0; n < t.img.nullAltWithTitle.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.nullAltWithTitle[n],
            _global.HTMLCS.getTranslation("1_1_1_H67.1"),
            "H67.1"
          );
        for (n = 0; n < t.img.ignored.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.img.ignored[n],
            _global.HTMLCS.getTranslation("1_1_1_H67.2"),
            "H67.2"
          );
        for (n = 0; n < t.img.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.missingAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_H37"),
            "H37"
          );
        for (n = 0; n < t.img.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.img.generalAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_G94.Image"),
            "G94.Image"
          );
        for (n = 0; n < t.inputImage.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.inputImage.missingAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_H36"),
            "H36"
          );
        for (n = 0; n < t.inputImage.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.inputImage.generalAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_G94.Button"),
            "G94.Button"
          );
        for (n = 0; n < t.area.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.area.missingAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_H24"),
            "H24"
          );
        for (n = 0; n < t.area.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.area.generalAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_H24.2"),
            "H24.2"
          );
      },
      testNullAltText: function(e) {
        var t = {
          img: {
            generalAlt: [],
            missingAlt: [],
            ignored: [],
            nullAltWithTitle: [],
            emptyAltInLink: []
          },
          inputImage: { generalAlt: [], missingAlt: [] },
          area: { generalAlt: [], missingAlt: [] }
        };
        elements = HTMLCS.util.getAllElements(
          e,
          'img, area, input[type="image"]'
        );
        for (var n = 0; n < elements.length; n++) {
          var i = elements[n],
            a = i.nodeName.toLowerCase(),
            r = !1,
            o = !1,
            s = !1;
          if ("a" === i.parentNode.nodeName.toLowerCase()) {
            var l = HTMLCS.util.getPreviousSiblingElement(i, null),
              u = HTMLCS.util.getNextSiblingElement(i, null);
            if (null === l && null === u) {
              var d = i.parentNode.textContent;
              if (void 0 !== i.parentNode.textContent)
                d = i.parentNode.textContent;
              else d = i.parentNode.innerText;
              !0 === HTMLCS.util.isStringEmpty(d) && (r = !0);
            }
          }
          switch (
            (!1 === i.hasAttribute("alt")
              ? (o = !0)
              : (i.getAttribute("alt") &&
                  !0 !== HTMLCS.util.isStringEmpty(i.getAttribute("alt"))) ||
                (s = !0),
            a)
          ) {
            case "img":
              !0 !== r || (!0 !== o && !0 !== s)
                ? !0 === o
                  ? t.img.missingAlt.push(i)
                  : !0 === s
                  ? !0 === i.hasAttribute("title") &&
                    !1 === HTMLCS.util.isStringEmpty(i.getAttribute("title"))
                    ? t.img.nullAltWithTitle.push(i)
                    : t.img.ignored.push(i)
                  : t.img.generalAlt.push(i)
                : t.img.emptyAltInLink.push(i.parentNode);
              break;
            case "input":
              !0 === o || !0 === s
                ? t.inputImage.missingAlt.push(i)
                : t.inputImage.generalAlt.push(i);
              break;
            case "area":
              !0 === o || !0 === s
                ? t.area.missingAlt.push(i)
                : t.inputImage.generalAlt.push(i);
          }
        }
        return t;
      },
      testLongdesc: function(e) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_1_1_G73,G74"),
          "G73,G74"
        );
      },
      testLinkStutter: function(e) {
        if ("a" === e.parentNode.nodeName.toLowerCase()) {
          var t = e.parentNode,
            n = {
              anchor: {
                href: t.getAttribute("href"),
                text: HTMLCS.util.getElementTextContent(t, !1),
                alt: this._getLinkAltText(t)
              }
            };
          if (
            (null === n.anchor.alt && (n.anchor.alt = ""),
            null !== n.anchor.alt &&
              "" !== n.anchor.alt &&
              HTMLCS.util.trim(n.anchor.alt).toLowerCase() ===
                HTMLCS.util.trim(n.anchor.text).toLowerCase() &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation("1_1_1_H2.EG5"),
                "H2.EG5"
              ),
            "" === n.anchor.text)
          ) {
            var i = HTMLCS.util.getPreviousSiblingElement(t, "a", !0),
              a = HTMLCS.util.getNextSiblingElement(t, "a", !0);
            null !== i &&
              ((n.previous = {
                href: i.getAttribute("href"),
                text: HTMLCS.util.getElementTextContent(i, !1),
                alt: this._getLinkAltText(i)
              }),
              null === n.previous.alt && (n.previous.alt = "")),
              null !== a &&
                ((n.next = {
                  href: a.getAttribute("href"),
                  text: HTMLCS.util.getElementTextContent(a, !1),
                  alt: this._getLinkAltText(a)
                }),
                null === n.next.alt && (n.next.alt = "")),
              n.next &&
                "" !== n.next.href &&
                null !== n.next.href &&
                n.anchor.href === n.next.href &&
                ("" !== n.next.text && "" === n.anchor.alt
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation("1_1_1_H2.EG4"),
                      "H2.EG4"
                    )
                  : n.next.text.toLowerCase() === n.anchor.alt.toLowerCase() &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation("1_1_1_H2.EG3"),
                      "H2.EG3"
                    )),
              n.previous &&
                "" !== n.previous.href &&
                null !== n.previous.href &&
                n.anchor.href === n.previous.href &&
                ("" !== n.previous.text && "" === n.anchor.alt
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation("1_1_1_H2.EG4"),
                      "H2.EG4"
                    )
                  : n.previous.text.toLowerCase() ===
                      n.anchor.alt.toLowerCase() &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation("1_1_1_H2.EG3")
                    ));
          }
        }
      },
      addMediaAlternativesResults: function(e) {
        for (
          var t = this.testMediaTextAlternatives(e), n = 0;
          n < t.object.missingBody.length;
          n++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.object.missingBody[n],
            _global.HTMLCS.getTranslation("1_1_1_H53,ARIA6"),
            "H53,ARIA6"
          );
        for (n = 0; n < t.object.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.object.generalAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_G94,G92.Object,ARIA6"),
            "G94,G92.Object,ARIA6"
          );
        for (n = 0; n < t.applet.missingBody.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.applet.missingBody[n],
            _global.HTMLCS.getTranslation("1_1_1_H35.3"),
            "H35.3"
          );
        for (n = 0; n < t.applet.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.applet.missingAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_H35.2"),
            "H35.2"
          );
        for (n = 0; n < t.applet.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.applet.generalAlt[n],
            _global.HTMLCS.getTranslation("1_1_1_G94,G92.Applet"),
            "G94,G92.Applet"
          );
      },
      testMediaTextAlternatives: function(e) {
        for (
          var t = {
              object: { missingBody: [], generalAlt: [] },
              applet: { missingBody: [], missingAlt: [], generalAlt: [] }
            },
            n = HTMLCS.util.getAllElements(e, "object"),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i];
          null === a.querySelector("object") &&
            (!0 ===
            HTMLCS.util.isStringEmpty(HTMLCS.util.getElementTextContent(a, !0))
              ? !1 === HTMLCS.util.hasValidAriaLabel(a) &&
                t.object.missingBody.push(a)
              : !1 === HTMLCS.util.hasValidAriaLabel(a) &&
                t.object.generalAlt.push(a));
        }
        for (
          n = HTMLCS.util.getAllElements(e, "applet"), i = 0;
          i < n.length;
          i++
        ) {
          var r = !1;
          if (null === a.querySelector("object")) {
            var o = HTMLCS.util.getElementTextContent(a, !0);
            !0 === HTMLCS.util.isStringEmpty(o) &&
              (t.applet.missingBody.push(a), (r = !0));
          }
          var s = a.getAttribute("alt") || "";
          !0 === HTMLCS.util.isStringEmpty(s) &&
            (t.applet.missingAlt.push(a), (r = !0)),
            !0 === HTMLCS.util.hasValidAriaLabel(a) && (r = !1),
            !1 === r && t.applet.generalAlt.push(a);
        }
        return t;
      },
      _getLinkAltText: function(e) {
        e = e.cloneNode(!0);
        for (var t = [], n = 0; n < e.childNodes.length; n++)
          t.push(e.childNodes[n]);
        for (var i = null; 0 < t.length; ) {
          var a = t.shift();
          if (
            1 === a.nodeType &&
            "img" === a.nodeName.toLowerCase() &&
            !0 === a.hasAttribute("alt")
          ) {
            i = (i = a.getAttribute("alt")) ? i.replace(/^\s+|\s+$/g, "") : "";
            break;
          }
        }
        return i;
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1 = {
      register: function() {
        return ["object", "embed", "applet", "bgsound", "audio", "video"];
      },
      process: function(e, t) {
        var n = e.nodeName.toLowerCase();
        "video" !== n &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            _global.HTMLCS.getTranslation("1_2_1_G158"),
            "G158"
          ),
          "bgsound" !== n &&
            "audio" !== n &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation("1_2_1_G159,G166"),
              "G159,G166"
            );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2 = {
      register: function() {
        return ["object", "embed", "applet", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_2_2_G87,G93"),
          "G87,G93"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3 = {
      register: function() {
        return ["object", "embed", "applet", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_2_3_G69,G78,G173,G8"),
          "G69,G78,G173,G8"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_4 = {
      register: function() {
        return ["object", "embed", "applet", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_2_4_G9,G87,G93"),
          "G9,G87,G93"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_5 = {
      register: function() {
        return ["object", "embed", "applet", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_2_5_G78,G173,G8"),
          "G78,G173,G8"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_6 = {
      register: function() {
        return ["object", "embed", "applet", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_2_6_G54,G81"),
          "G54,G81"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_7 = {
      register: function() {
        return ["object", "embed", "applet", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_2_7_G8"),
          "G8"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_8 = {
      register: function() {
        return ["object", "embed", "applet", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_2_8_G69,G159"),
          "G69,G159"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_9 = {
      register: function() {
        return ["object", "embed", "applet", "bgsound", "audio"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_2_9_G150,G151,G157"),
          "G150,G151,G157"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A = {
      _labelNames: null,
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        var n = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
        e === t && n.testHeadingOrder(t, HTMLCS.WARNING);
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_AAA = {
      _labelNames: null,
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        var n = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
        e === t && n.testHeadingOrder(t, HTMLCS.ERROR);
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1 = {
      _labelNames: null,
      register: function() {
        return [
          "_top",
          "p",
          "div",
          "input",
          "select",
          "textarea",
          "button",
          "table",
          "fieldset",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6"
        ];
      },
      process: function(e, t) {
        var n = e.nodeName.toLowerCase();
        if (e === t)
          this.testPresentationMarkup(t), this.testEmptyDupeLabelForAttrs(t);
        else
          switch (n) {
            case "input":
            case "textarea":
            case "button":
              this.testLabelsOnInputs(e, t);
              break;
            case "form":
              this.testRequiredFieldsets(e);
              break;
            case "select":
              this.testLabelsOnInputs(e, t), this.testOptgroup(e);
              break;
            case "p":
            case "div":
              this.testNonSemanticHeading(e),
                this.testListsWithBreaks(e),
                this.testUnstructuredNavLinks(e);
              break;
            case "table":
              this.testGeneralTable(e),
                this.testTableHeaders(e),
                this.testTableCaptionSummary(e);
              break;
            case "fieldset":
              this.testFieldsetLegend(e);
              break;
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              this.testEmptyHeading(e);
          }
      },
      testSemanticPresentationRole: function(e) {
        if (
          !1 === HTMLCS.util.isAriaHidden(e) &&
          e.hasAttribute("role") &&
          "presentation" === e.getAttribute("role")
        ) {
          var t = e.querySelectorAll(
            "*:not(" + ["div", "span", "b", "i"].join("):not(") + ")"
          );
          (t = [].filter.call(t, function(e) {
            return !1 === e.hasAttribute("role");
          })).length &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation("1_3_1_F92,ARIA4"),
              "F92,ARIA4"
            );
        }
      },
      testEmptyDupeLabelForAttrs: function(e) {
        this._labelNames = {};
        for (var t = e.getElementsByTagName("label"), n = 0; n < t.length; n++)
          if (
            null !== t[n].getAttribute("for") &&
            "" !== t[n].getAttribute("for")
          ) {
            var i = t[n].getAttribute("for");
            if (this._labelNames[i] && null !== this._labelNames[i])
              this._labelNames[i] = null;
            else {
              if (((this._labelNames[i] = t[n]), e.ownerDocument))
                var a = e.ownerDocument.getElementById(i);
              else a = e.getElementById(i);
              if (null === a) {
                var r = HTMLCS.ERROR,
                  o = _global.HTMLCS.getTranslation("1_3_1_H44.NonExistent"),
                  s = "H44.NonExistent";
                if (
                  !0 === HTMLCS.isFullDoc(e) ||
                  "body" === e.nodeName.toLowerCase()
                ) {
                  (r = HTMLCS.WARNING),
                    (o = _global.HTMLCS.getTranslation(
                      "1_3_1_H44.NonExistentFragment"
                    ));
                  s = "H44.NonExistentFragment";
                }
                HTMLCS.addMessage(r, t[n], o, s);
              } else {
                var l = a.nodeName.toLowerCase();
                -1 ===
                  "input|select|textarea|button|keygen|meter|output|progress".indexOf(
                    l
                  ) &&
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    t[n],
                    _global.HTMLCS.getTranslation("1_3_1_H44.NotFormControl"),
                    "H44.NotFormControl"
                  );
              }
            }
          }
      },
      testLabelsOnInputs: function(e, t, n) {
        "input" === (i = e.nodeName.toLowerCase()) &&
          (i = !0 === e.hasAttribute("type") ? e.getAttribute("type") : "text");
        var i,
          a = !1,
          r = function(e) {
            a || (a = {}), (a[e] = !0);
          },
          o = !1;
        "select" === (i = i.toLowerCase()) || "textarea" === i
          ? (o = !0)
          : !0 === /^(radio|checkbox|text|file|password)$/.test(i) && (o = !0),
          null !== e.getAttribute("hidden") && (o = !1),
          e.ownerDocument.querySelector('label[for="' + e.id + '"]') &&
            r("explicit");
        var s = !1;
        e.parentNode &&
          HTMLCS.util.eachParentNode(e, function(e) {
            "label" === e.nodeName.toLowerCase() && (s = !0);
          }),
          !0 === s && r("implicit");
        var l = e.getAttribute("title");
        return (
          null !== l &&
            (!0 === /^\s*$/.test(l) && !0 === o
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H65"),
                  "H65"
                )
              : r("title")),
          !0 === e.hasAttribute("aria-label") &&
            (!1 === HTMLCS.util.hasValidAriaLabel(e)
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_ARIA6"),
                  "ARIA6"
                )
              : r("aria-label")),
          !0 === e.hasAttribute("aria-labelledby") &&
            (!1 === HTMLCS.util.hasValidAriaLabel(e)
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_ARIA16,ARIA9").replace(
                    /\{\{id\}\}/g,
                    e.getAttribute("aria-labelledby")
                  ),
                  "ARIA16,ARIA9"
                )
              : r("aria-labelledby")),
          !0 !== n &&
            (!1 !== a && !1 === o
              ? "hidden" === i
                ? HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation("1_3_1_F68.Hidden"),
                    "F68.Hidden"
                  )
                : null !== e.getAttribute("hidden") &&
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation("1_3_1_F68.HiddenAttr"),
                    "F68.HiddenAttr"
                  )
              : !1 === a &&
                !0 === o &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_F68"),
                  "F68"
                )),
          a
        );
      },
      testPresentationMarkup: function(e) {
        var t = HTMLCS.util.getElementWindow(e).document,
          n = HTMLCS.util.getDocumentType(t);
        if (!n || ("html5" !== n && "xhtml5" !== n)) {
          for (
            i = HTMLCS.util.getAllElements(
              e,
              "b, i, u, s, strike, tt, big, small, center, font"
            ),
              a = 0;
            a < i.length;
            a++
          ) {
            r =
              "H49." +
              i[a].nodeName.substr(0, 1).toUpperCase() +
              i[a].nodeName.substr(1).toLowerCase();
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              i[a],
              _global.HTMLCS.getTranslation("1_3_1_H49.Semantic"),
              r
            );
          }
          for (
            i = HTMLCS.util.getAllElements(e, "*[align]"), a = 0;
            a < i.length;
            a++
          ) {
            r = "H49.AlignAttr";
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              i[a],
              _global.HTMLCS.getTranslation("1_3_1_H49.AlignAttr.Semantic"),
              r
            );
          }
        } else {
          for (
            var i = HTMLCS.util.getAllElements(
                e,
                "strike, tt, big, center, font"
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var r =
              "H49." +
              i[a].nodeName.substr(0, 1).toUpperCase() +
              i[a].nodeName.substr(1).toLowerCase();
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              i[a],
              _global.HTMLCS.getTranslation("1_3_1_H49."),
              r
            );
          }
          for (
            var i = HTMLCS.util.getAllElements(e, "*[align]"), a = 0;
            a < i.length;
            a++
          ) {
            var r = "H49.AlignAttr";
            HTMLCS.addMessage(HTMLCS.ERROR, i[a], "Align attributes .", r);
          }
        }
      },
      testNonSemanticHeading: function(e) {
        var t = e.nodeName.toLowerCase();
        if ("p" === t || "div" === t) {
          var n = e.childNodes;
          if (1 === n.length && 1 === n[0].nodeType) {
            var i = n[0].nodeName.toLowerCase();
            !0 === /^(strong|em|b|i|u)$/.test(i) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation("1_3_1_H42"),
                "H42"
              );
          }
        }
      },
      testTableHeaders: function(e) {
        for (
          var t = HTMLCS.util.testTableHeaders(e),
            n = this._testTableScopeAttrs(e),
            i = 0;
          i < n.invalid.length;
          i++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            n.invalid[i],
            _global.HTMLCS.getTranslation("1_3_1_H63.3"),
            "H63.3"
          );
        for (i = 0; i < n.obsoleteTd.length; i++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            n.obsoleteTd[i],
            _global.HTMLCS.getTranslation("1_3_1_H63.2"),
            "H63.2"
          );
        !0 === t.allowScope
          ? 0 === n.missing.length && t.required
          : !0 === n.used &&
            (HTMLCS.addMessage(
              HTMLCS.WARNING,
              e,
              _global.HTMLCS.getTranslation("1_3_1_H43.ScopeAmbiguous"),
              "H43.ScopeAmbiguous"
            ),
            (n = null));
        for (i = 0; i < t.wrongHeaders.length; i++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.wrongHeaders[i].element,
            _global.HTMLCS.getTranslation("1_3_1_H43.IncorrectAttr")
              .replace(/\{\{expected\}\}/g, t.wrongHeaders[i].expected)
              .replace(/\{\{actual\}\}/g, t.wrongHeaders[i].actual),
            "H43.IncorrectAttr"
          );
        !0 === t.required &&
          !1 === t.allowScope &&
          (!1 === t.used
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation("1_3_1_H43.HeadersRequired"),
                "H43.HeadersRequired"
              )
            : (0 < t.missingThId.length &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeaderIds"),
                  "H43.MissingHeaderIds"
                ),
              0 < t.missingTd.length &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation(
                    "1_3_1_H43.MissingHeadersAttrs"
                  ),
                  "H43.MissingHeadersAttrs"
                ))),
          !0 === t.required &&
            !0 === t.allowScope &&
            !1 === t.correct &&
            !1 === n.correct &&
            (!1 === n.used && !1 === t.used
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H43,H63"),
                  "H43,H63"
                )
              : !1 === n.used &&
                (0 < t.missingThId.length || 0 < t.missingTd.length)
              ? (0 < t.missingThId.length &&
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    e,
                    _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeaderIds"),
                    "H43.MissingHeaderIds"
                  ),
                0 < t.missingTd.length &&
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    e,
                    _global.HTMLCS.getTranslation(
                      "1_3_1_H43.MissingHeadersAttrs"
                    ),
                    "H43.MissingHeadersAttrs"
                  ))
              : 0 < n.missing.length && !1 === t.used
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H63.1"),
                  "H63.1"
                )
              : 0 < n.missing.length &&
                (0 < t.missingThId.length || 0 < t.missingTd.length) &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H43,H63"),
                  "H43,H63"
                ));
      },
      _testTableScopeAttrs: function(e) {
        var t = {
            th: e.getElementsByTagName("th"),
            td: e.getElementsByTagName("td")
          },
          n = {
            used: !1,
            correct: !0,
            missing: [],
            invalid: [],
            obsoleteTd: []
          };
        for (var i in t)
          for (var a = 0; a < t[i].length; a++) {
            var r = t[i][a],
              o = "";
            !0 === r.hasAttribute("scope") &&
              ((n.used = !0),
              r.getAttribute("scope") && (o = r.getAttribute("scope"))),
              "th" === r.nodeName.toLowerCase()
                ? !0 === /^\s*$/.test(o)
                  ? ((n.correct = !1), n.missing.push(r))
                  : !1 === /^(row|col|rowgroup|colgroup)$/.test(o) &&
                    ((n.correct = !1), n.invalid.push(r))
                : "" !== o &&
                  (n.obsoleteTd.push(r),
                  !1 === /^(row|col|rowgroup|colgroup)$/.test(o) &&
                    ((n.correct = !1), n.invalid.push(r)));
          }
        return n;
      },
      testTableCaptionSummary: function(e) {
        var t = e.getAttribute("summary") || "",
          n = e.getElementsByTagName("caption"),
          i = "";
        0 < n.length && (i = n[0].innerHTML.replace(/^\s*(.*?)\s*$/g, "$1"));
        var a = HTMLCS.util.getDocumentType(e.ownerDocument);
        a &&
          -1 === a.indexOf("html5") &&
          ("" !== (t = t.replace(/^\s*(.*?)\s*$/g, "$1"))
            ? !0 === HTMLCS.util.isLayoutTable(e)
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H73.3.LayoutTable"),
                  "H73.3.LayoutTable"
                )
              : (i === t &&
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    e,
                    _global.HTMLCS.getTranslation("1_3_1_H39,H73.4"),
                    "H39,H73.4"
                  ),
                HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H73.3.Check"),
                  "H73.3.Check"
                ))
            : !1 === HTMLCS.util.isLayoutTable(e) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation("1_3_1_H73.3.NoSummary"),
                "H73.3.NoSummary"
              )),
          "" !== i
            ? !0 === HTMLCS.util.isLayoutTable(e)
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H39.3.LayoutTable"),
                  "H39.3.LayoutTable"
                )
              : HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  e,
                  _global.HTMLCS.getTranslation("1_3_1_H39.3.Check"),
                  "H39.3.Check"
                )
            : !1 === HTMLCS.util.isLayoutTable(e) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation("1_3_1_H39.3.NoCaption"),
                "H39.3.NoCaption"
              );
      },
      testFieldsetLegend: function(e) {
        var t = e.querySelector("legend");
        (null !== t && t.parentNode === e) ||
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            e,
            _global.HTMLCS.getTranslation("1_3_1_H71.NoLegend"),
            "H71.NoLegend"
          );
      },
      testOptgroup: function(e) {
        null === e.querySelector("optgroup") &&
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            e,
            _global.HTMLCS.getTranslation("1_3_1_H85.2"),
            "H85.2"
          );
      },
      testRequiredFieldsets: function(e) {
        for (
          var t = e.querySelectorAll("input[type=radio], input[type=checkbox]"),
            n = {},
            i = 0;
          i < t.length;
          i++
        ) {
          var a = t[i];
          if (!0 === a.hasAttribute("name")) {
            for (
              var r = a.getAttribute("name"), o = a.parentNode;
              "fieldset" !== o.nodeName.toLowerCase() && null !== o && o !== e;

            )
              o = o.parentNode;
            "fieldset" !== o.nodeName.toLowerCase() && (o = null);
          }
          if (void 0 === n[r]) n[r] = o;
          else if (null === o || o !== n[r]) {
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              e,
              _global.HTMLCS.getTranslation("1_3_1_H71.SameName"),
              "H71.SameName"
            );
            break;
          }
        }
      },
      testListsWithBreaks: function(e) {
        var t = [];
        if (null !== e.querySelector("br")) {
          for (var n = [], i = 0; i < e.childNodes.length; i++)
            n.push(e.childNodes[i]);
          for (var a = []; 0 < n.length; ) {
            var r = n.shift();
            if (1 === r.nodeType)
              if ("br" === r.nodeName.toLowerCase())
                t.push(a.join(" ").replace(/^\s*(.*?)\s*$/g, "$1")), (a = []);
              else
                for (i = r.childNodes.length - 1; 0 <= i; --i)
                  n.unshift(r.childNodes[i]);
            else 3 === r.nodeType && a.push(r.nodeValue);
          }
          0 < a.length && t.push(a.join(" ").replace(/^\s*(.*?)\s*$/g, "$1"));
          for (i = 0; i < t.length; i++) {
            if (!0 === /^[-*]\s+/.test(t[0])) {
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation("1_3_1_H48.1"),
                "H48.1"
              );
              break;
            }
            if (!0 === /^\d+[:/\-.]?\s+/.test(t[0])) {
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation("1_3_1_H48.2"),
                "H48.2"
              );
              break;
            }
          }
        }
      },
      testHeadingOrder: function(e, t) {
        for (
          var n = 0,
            i = HTMLCS.util.getAllElements(e, "h1, h2, h3, h4, h5, h6"),
            a = 0;
          a < i.length;
          a++
        ) {
          var r = parseInt(i[a].nodeName.substr(1, 1));
          1 < r - n &&
            (0 === n &&
              HTMLCS.addMessage(
                t,
                i[a],
                _global.HTMLCS.getTranslation("1_3_1_G141_a").replace(
                  /\{\{headingNum\}\}/g,
                  r
                ),
                "G141"
              ),
            HTMLCS.addMessage(
              t,
              i[a],
              _global.HTMLCS.getTranslation("1_3_1_G141_b")
                .replace(/\{\{headingNum\}\}/g, r)
                .replace(/\{\{properHeadingNum\}\}/g, n + 1),
              "G141"
            )),
            (n = r);
        }
      },
      testEmptyHeading: function(e) {
        var t = HTMLCS.util.getElementTextContent(e, !0);
        !0 === /^\s*$/.test(t) &&
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            e,
            _global.HTMLCS.getTranslation("1_3_1_H42.2"),
            "H42.2"
          );
      },
      testUnstructuredNavLinks: function(e) {
        for (
          var t = 0, n = e.childNodes, i = 0;
          i < n.length &&
          !(
            1 === n[i].nodeType &&
            "a" === n[i].nodeName.toLowerCase() &&
            1 < ++t
          );
          i++
        );
        if (1 < t) {
          for (
            var a = e.parentNode;
            null !== a &&
            "ul" !== a.nodeName.toLowerCase() &&
            "ol" !== a.nodeName.toLowerCase();

          )
            a = a.parentNode;
          null === a &&
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              e,
              _global.HTMLCS.getTranslation("1_3_1_H48"),
              "H48"
            );
        }
      },
      testGeneralTable: function(e) {
        !0 === HTMLCS.util.isLayoutTable(e)
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation("1_3_1_LayoutTable"),
              "LayoutTable"
            )
          : HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation("1_3_1_DataTable"),
              "DataTable"
            );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_2 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("1_3_2_G57"),
          "G57"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_3 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("1_3_3_G96"),
          "G96"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_1 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("1_4_1_G14,G18"),
          "G14,G182"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2 = {
      register: function() {
        return ["object", "embed", "applet", "bgsound", "audio", "video"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("1_4_2_F23"),
          "F23"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast = {
      testContrastRatio: function(e, t, n) {
        var i = [];
        if (e.ownerDocument) a = [e];
        else {
          var a = [],
            r = e.getElementsByTagName("body");
          if (r.length) var a = [r[0]];
        }
        for (; 0 < a.length; ) {
          var o = a.shift();
          if (
            o &&
            1 === o.nodeType &&
            !1 === HTMLCS.util.isVisuallyHidden(o) &&
            !1 === HTMLCS.util.isDisabled(o)
          ) {
            for (var s = !1, l = 0; l < o.childNodes.length; l++)
              1 === o.childNodes[l].nodeType
                ? a.push(o.childNodes[l])
                : 3 === o.childNodes[l].nodeType &&
                  "" !== HTMLCS.util.trim(o.childNodes[l].nodeValue) &&
                  (s = !0);
            if (!0 === s) {
              var u = HTMLCS.util.style(o);
              if (u) {
                var d = u.backgroundColor,
                  _ = u.color,
                  c = !1,
                  p = !1;
                "none" !== u.backgroundImage && (c = !0),
                  "absolute" == u.position && (p = !0);
                var m = o.parentNode,
                  g = 0.75 * parseFloat(u.fontSize, 10),
                  h = 18;
                if (
                  "bold" === u.fontWeight ||
                  600 <= parseInt(u.fontWeight, 10)
                )
                  h = 14;
                var b = t;
                for (
                  h <= g && (b = n);
                  ("transparent" === d || "rgba(0, 0, 0, 0)" === d) &&
                  m &&
                  m.ownerDocument;

                ) {
                  var f = HTMLCS.util.style(m);
                  d = f.backgroundColor;
                  "none" !== f.backgroundImage && (c = !0),
                    "absolute" == f.position && (p = !0);
                  var C = HTMLCS.util.style(m, ":before");
                  if (
                    C &&
                    "fixed" == C.position &&
                    "transform" == C.willChange &&
                    C.width == f.width &&
                    parseInt(C.height, 10) <= parseInt(f.height, 10) &&
                    "none" !== C.backgroundImage
                  ) {
                    c = !0;
                    break;
                  }
                  m = m.parentNode;
                }
                var T = HTMLCS.util.colourStrToRGB(d).alpha,
                  H = HTMLCS.util.colourStrToRGB(_).alpha;
                if (d && T < 1 && 0 < T) {
                  i.push({
                    element: o,
                    colour: _,
                    bgColour: d,
                    value: void 0,
                    required: b,
                    hasAlpha: !0
                  });
                  continue;
                }
                if (_ && H < 1 && 0 < H) {
                  i.push({
                    element: o,
                    colour: _,
                    bgColour: _,
                    value: void 0,
                    required: b,
                    hasAlpha: !0
                  });
                  continue;
                }
                if (!0 === c) {
                  i.push({
                    element: o,
                    colour: _,
                    bgColour: void 0,
                    value: void 0,
                    required: b,
                    hasBgImage: !0
                  });
                  continue;
                }
                if (!0 === p) {
                  i.push({
                    element: o,
                    colour: _,
                    bgColour: void 0,
                    value: void 0,
                    required: b,
                    isAbsolute: !0
                  });
                  continue;
                }
                if ("transparent" === d || "rgba(0, 0, 0, 0)" === d) continue;
                var y = HTMLCS.util.contrastRatio(d, _);
                if (y < b) {
                  var S = this.recommendColour(d, _, b);
                  i.push({
                    element: o,
                    colour: u.color,
                    bgColour: d,
                    value: y,
                    required: b,
                    recommendation: S
                  });
                }
              }
            }
          }
        }
        return i;
      },
      recommendColour: function(e, t, n) {
        (t = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(t))),
          (e = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(e)));
        var i = HTMLCS.util.contrastRatio(t, e),
          a = Math.abs(HTMLCS.util.relativeLum(t) - 0.5),
          r = Math.abs(HTMLCS.util.relativeLum(e) - 0.5),
          o = null;
        if (i < n) {
          var s = 1.0025;
          if (a <= r) {
            var l = "back",
              u = e;
            if (HTMLCS.util.relativeLum(e) < 0.5) s = 1 / s;
          } else {
            (l = "fore"), (u = t);
            if (HTMLCS.util.relativeLum(t) < 0.5) s = 1 / s;
          }
          for (
            var d = HTMLCS.util.sRGBtoHSV(u), _ = t, c = e, p = !1, m = 0;
            i < n;

          ) {
            if ("#fff" === u || "#000" === u)
              if (!0 === p)
                if ("fore" === l)
                  for (var g = c, h = 1; c === g; ) {
                    c = this.multiplyColour(c, Math.pow(1 / s, h));
                    h++;
                  }
                else {
                  var b = _;
                  for (h = 1; _ === b; ) {
                    _ = this.multiplyColour(_, Math.pow(1 / s, h));
                    h++;
                  }
                }
              else {
                if (((_ = t), (c = e), (s = 1 / s), "fore" === l)) {
                  l = "back";
                  d = e;
                } else {
                  l = "fore";
                  d = t;
                }
                (d = HTMLCS.util.sRGBtoHSV(d)), (p = !0);
              }
            m++;
            (u = HTMLCS.util.HSVtosRGB(d)),
              (u = this.multiplyColour(u, Math.pow(s, m)));
            if ("fore" === l) _ = u;
            else c = u;
            i = HTMLCS.util.contrastRatio(_, c);
          }
          o = { fore: { from: t, to: _ }, back: { from: e, to: c } };
        }
        return o;
      },
      multiplyColour: function(e, t) {
        var n = HTMLCS.util.sRGBtoHSV(e),
          i = n.saturation * n.value;
        return (
          0 === n.value && (n.value = 1 / 255),
          (n.value = n.value * t),
          0 === n.value ? (n.saturation = 0) : (n.saturation = i / n.value),
          (n.value = Math.min(1, n.value)),
          (n.saturation = Math.min(1, n.saturation)),
          HTMLCS.util.RGBtoColourStr(HTMLCS.util.HSVtosRGB(n))
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_F24 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        for (
          var n = HTMLCS.util.getAllElements(t, "*"), i = 0;
          i < n.length;
          i++
        )
          this.testColourComboFail(n[i]);
      },
      testColourComboFail: function(e) {
        var t = e.hasAttribute("color");
        t =
          (t = (t = t || e.hasAttribute("link")) || e.hasAttribute("vlink")) ||
          e.hasAttribute("alink");
        var n = e.hasAttribute("bgcolor");
        if (e.style) {
          var i = e.style.color,
            a = e.style.background;
          "" !== i && "auto" !== i && (t = !0),
            "" !== a && "auto" !== a && (n = !0);
        }
        n !== t &&
          (!0 === n
            ? HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation("1_4_3_F24.BGColour"),
                "F24.BGColour"
              )
            : HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation("1_4_3_F24.FGColour"),
                "F24.FGColour"
              ));
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        if (e === t)
          for (
            var n = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(
                t,
                4.5,
                3
              ),
              i = 0;
            i < n.length;
            i++
          ) {
            e = n[i].element;
            for (
              var a = 2,
                r = Math.round(n[i].value * Math.pow(10, a)) / Math.pow(10, a),
                o = n[i].required,
                s = n[i].recommendation,
                l = n[i].hasBgImage || !1,
                u = n[i].isAbsolute || !1,
                d = n[i].hasAlpha || !1;
              o === r;

            )
              a++,
                (r =
                  Math.round(n[i].value * Math.pow(10, a)) / Math.pow(10, a));
            if (4.5 === o) var _ = "G18";
            else if (3 === o) _ = "G145";
            var c = [];
            s &&
              (s.fore.from !== s.fore.to &&
                c.push(
                  _global.HTMLCS.getTranslation(
                    "1_4_3_G18_or_G145.Fail.Recomendation.Text"
                  ) +
                    " " +
                    s.fore.to
                ),
              s.back.from !== s.back.to &&
                c.push(
                  _global.HTMLCS.getTranslation(
                    "1_4_3_G18_or_G145.Fail.Recomendation.Background"
                  ) +
                    " " +
                    s.back.to
                )),
              0 < c.length &&
                (c =
                  " " +
                  _global.HTMLCS.getTranslation(
                    "1_4_3_G18_or_G145.Fail.Recomendation"
                  ) +
                  " " +
                  c.join(", ") +
                  "."),
              !0 === u
                ? ((_ += ".Abs"),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation(
                      "1_4_3_G18_or_G145.Abs"
                    ).replace(/\{\{required\}\}/g, o),
                    _
                  ))
                : !0 === l
                ? ((_ += ".BgImage"),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation(
                      "1_4_3_G18_or_G145.BgImage"
                    ).replace(/\{\{required\}\}/g, o),
                    _
                  ))
                : !0 === d
                ? ((_ += ".Alpha"),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation(
                      "1_4_3_G18_or_G145.Alpha"
                    ).replace(/\{\{required\}\}/g, o),
                    _
                  ))
                : ((_ += ".Fail"),
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    e,
                    _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Fail")
                      .replace(/\{\{required\}\}/g, o)
                      .replace(/\{\{value\}\}/g, r) + c,
                    _
                  ));
          }
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("1_4_4_G142"),
          "G142"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        null !== t.querySelector("img") &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation("1_4_5_G140,C22,C30.AALevel"),
            "G140,C22,C30.AALevel"
          );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        if (e === t)
          for (
            var n = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(
                t,
                7,
                4.5
              ),
              i = 0;
            i < n.length;
            i++
          ) {
            e = n[i].element;
            for (
              var a = 2,
                r = Math.round(n[i].value * Math.pow(10, a)) / Math.pow(10, a),
                o = n[i].required,
                s = n[i].recommendation,
                l = n[i].hasBgImage || !1,
                u = n[i].isAbsolute || !1;
              o === r;

            )
              a++,
                (r =
                  Math.round(n[i].value * Math.pow(10, a)) / Math.pow(10, a));
            if (4.5 === o) var d = "G18";
            else if (7 === o) d = "G17";
            var _ = [];
            s &&
              (s.fore.from !== s.fore.to &&
                _.push(
                  _global.HTMLCS.getTranslation(
                    "1_4_6_G18_or_G17.Fail.Recomendation.Text"
                  ) +
                    " " +
                    s.fore.to
                ),
              s.back.from !== s.back.to &&
                _.push(
                  _global.HTMLCS.getTranslation(
                    "1_4_6_G18_or_G17.Fail.Recomendation.Background"
                  ) + s.back.to
                )),
              0 < _.length &&
                (_ =
                  " " +
                  _global.HTMLCS.getTranslation(
                    "1_4_6_G18_or_G17.Fail.Recomendation"
                  ) +
                  " " +
                  _.join(", ") +
                  "."),
              !0 === u
                ? ((d += ".Abs"),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation(
                      "1_4_6_G18_or_G17.Abs"
                    ).replace(/\{\{required\}\}/g, o),
                    d
                  ))
                : !0 === l
                ? ((d += ".BgImage"),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation(
                      "1_4_6_G18_or_G17.BgImage"
                    ).replace(/\{\{required\}\}/g, o),
                    d
                  ))
                : ((d += ".Fail"),
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    e,
                    _global.HTMLCS.getTranslation("1_4_6_G18_or_G17.Fail")
                      .replace(/\{\{required\}\}/g, o)
                      .replace(/\{\{value\}\}/g, r) + _,
                    d
                  ));
          }
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_7 = {
      register: function() {
        return ["object", "embed", "applet", "bgsound", "audio"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("1_4_7_G56"),
          "G56"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("1_4_8_G148,G156,G175"),
          "G148,G156,G175"
        ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation("1_4_8_H87,C20"),
            "H87,C20"
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation("1_4_8_C19,G172,G169"),
            "C19,G172,G169"
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation("1_4_8_G188,C21"),
            "G188,C21"
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation("1_4_8_H87,G146,C26"),
            "H87,G146,C26"
          );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_9 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        null !== t.querySelector("img") &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation("1_4_9_G140,C22,C30.NoException"),
            "G140,C22,C30.NoException"
          );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        if (e === t) {
          HTMLCS.util
            .getAllElements(
              t,
              "*[onclick], *[onkeyup], *[onkeydown], *[onkeypress], *[onfocus], *[onblur]"
            )
            .forEach(function(e) {
              !1 === HTMLCS.util.isKeyboardNavigable(e) &&
                HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation("2_1_1_G90"),
                  "G90"
                );
            });
          for (
            var n = HTMLCS.util.getAllElements(t, "*[ondblclick]"), i = 0;
            i < n.length;
            i++
          )
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              n[i],
              _global.HTMLCS.getTranslation("2_1_1_SCR20.DblClick"),
              "SCR20.DblClick"
            );
          var a = HTMLCS.util.getAllElements(t, "*[onmouseover]");
          for (i = 0; i < a.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              a[i],
              _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseOver"),
              "SCR20.MouseOver"
            );
          var r = HTMLCS.util.getAllElements(t, "*[onmouseout]");
          for (i = 0; i < r.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              r[i],
              _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseOut"),
              "SCR20.MouseOut"
            );
          var o = HTMLCS.util.getAllElements(t, "*[onmousemove]");
          for (i = 0; i < o.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              o[i],
              _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseMove"),
              "SCR20.MouseMove"
            );
          var s = HTMLCS.util.getAllElements(t, "*[onmousedown]");
          for (i = 0; i < s.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              s[i],
              _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseDown"),
              "SCR20.MouseDown"
            );
          var l = HTMLCS.util.getAllElements(t, "*[onmouseup]");
          for (i = 0; i < l.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              l[i],
              _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseUp"),
              "SCR20.MouseUp"
            );
        }
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2 = {
      register: function() {
        return ["object", "applet", "embed"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          e,
          _global.HTMLCS.getTranslation("2_1_2_F10"),
          "F10"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1 = {
      register: function() {
        return ["meta"];
      },
      process: function(e, t) {
        !0 === e.hasAttribute("http-equiv") &&
          "refresh" === String(e.getAttribute("http-equiv")).toLowerCase() &&
          !0 === /^[1-9]\d*/.test(e.getAttribute("content").toLowerCase()) &&
          (!0 === /url=/.test(e.getAttribute("content").toLowerCase())
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation("2_2_1_F40.2"),
                "F40.2"
              )
            : HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation("2_2_1_F41.2"),
                "F41.2"
              ));
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2 = {
      register: function() {
        return ["_top", "blink"];
      },
      process: function(e, t) {
        if (e === t) {
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            _global.HTMLCS.getTranslation(
              "2_2_2_SCR33,SCR22,G187,G152,G186,G191"
            ),
            "SCR33,SCR22,G187,G152,G186,G191"
          );
          for (
            var n = HTMLCS.util.getAllElements(t, "*"), i = 0;
            i < n.length;
            i++
          ) {
            var a = HTMLCS.util.style(n[i]);
            a &&
              !0 === /blink/.test(a["text-decoration"]) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                n[i],
                _global.HTMLCS.getTranslation("2_2_2_F4"),
                "F4"
              );
          }
        } else
          "blink" === e.nodeName.toLowerCase() &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation("2_2_2_F47"),
              "F47"
            );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("2_2_3_G5"),
          "G5"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_4 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("2_2_4_SCR14"),
          "SCR14"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_5 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("2_2_5_G105,G181"),
          "G105,G181"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("2_3_1_G19,G176"),
          "G19,G176"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_2 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("2_3_2_G19"),
          "G19"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1 = {
      register: function() {
        return ["iframe", "a", "area", "_top"];
      },
      process: function(e, t) {
        if (e === t) this.testGenericBypassMsg(t);
        else
          switch (e.nodeName.toLowerCase()) {
            case "iframe":
              this.testIframeTitle(e);
              break;
            case "a":
            case "area":
              this.testSameDocFragmentLinks(e, t);
          }
      },
      testIframeTitle: function(e) {
        if ("iframe" === e.nodeName.toLowerCase()) {
          var t = !1;
          !0 === e.hasAttribute("title") &&
            e.getAttribute("title") &&
            !1 === /^\s+$/.test(e.getAttribute("title")) &&
            (t = !0),
            !1 === t
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation("2_4_1_H64.1"),
                  "H64.1"
                )
              : HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  e,
                  _global.HTMLCS.getTranslation("2_4_1_H64.2"),
                  "H64.2"
                );
        }
      },
      testGenericBypassMsg: function(e) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("2_4_1_G1,G123,G124,H69"),
          "G1,G123,G124,H69"
        );
      },
      testSameDocFragmentLinks: function(e, t) {
        if (!0 === e.hasAttribute("href")) {
          var n = e.getAttribute("href");
          if (1 < (n = HTMLCS.util.trim(n)).length && "#" === n.charAt(0)) {
            var i = n.substr(1);
            try {
              var a = t;
              a.ownerDocument && (a = a.ownerDocument);
              var r = a.getElementById(i);
              if (null === r) {
                var o = HTMLCS.util.getElementWindow(t).document,
                  s = HTMLCS.util.getDocumentType(o),
                  l = "a";
                s && -1 === s.indexOf("html5") && (l = "*"),
                  (r = a.querySelector(l + '[name="' + i + '"]'));
              }
              (null !== r && !1 !== HTMLCS.util.contains(t, r)) ||
                (!0 === HTMLCS.isFullDoc(t) ||
                "body" === t.nodeName.toLowerCase()
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation(
                        "2_4_1_G1,G123,G124.NoSuchID"
                      ).replace(/\{\{id\}\}/g, i),
                      "G1,G123,G124.NoSuchID"
                    )
                  : HTMLCS.addMessage(
                      HTMLCS.WARNING,
                      e,
                      _global.HTMLCS.getTranslation(
                        "2_4_1_G1,G123,G124.NoSuchIDFragment"
                      ).replace(/\{\{id\}\}/g, i),
                      "G1,G123,G124.NoSuchIDFragment"
                    ));
            } catch (e) {}
          }
        }
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2 = {
      register: function() {
        return ["html"];
      },
      process: function(e, t) {
        for (var n = e.childNodes, i = null, a = 0; a < n.length; a++)
          if ("head" === n[a].nodeName.toLowerCase()) {
            i = n[a];
            break;
          }
        if (null === i)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            e,
            _global.HTMLCS.getTranslation("2_4_2_H25.1.NoHeadEl"),
            "H25.1.NoHeadEl"
          );
        else {
          n = i.childNodes;
          var r = null;
          for (a = 0; a < n.length; a++)
            if ("title" === n[a].nodeName.toLowerCase()) {
              r = n[a];
              break;
            }
          null === r
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                i,
                _global.HTMLCS.getTranslation("2_4_2_H25.1.NoTitleEl"),
                "H25.1.NoTitleEl"
              )
            : !0 === /^\s*$/.test(r.innerHTML)
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                r,
                _global.HTMLCS.getTranslation("2_4_2_H25.1.EmptyTitle"),
                "H25.1.EmptyTitle"
              )
            : HTMLCS.addMessage(
                HTMLCS.NOTICE,
                r,
                _global.HTMLCS.getTranslation("2_4_2_H25.2"),
                "H25.2"
              );
        }
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_3 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        e === t &&
          (t.querySelector("*[tabindex]") &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation("2_4_3_H4.2"),
              "H4.2"
            ));
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4 = {
      register: function() {
        return ["a"];
      },
      process: function(e, t) {
        !0 === e.hasAttribute("title")
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation("2_4_4_H77,H78,H79,H80,H81,H33"),
              "H77,H78,H79,H80,H81,H33"
            )
          : HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation("2_4_4_H77,H78,H79,H80,H81"),
              "H77,H78,H79,H80,H81"
            );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("2_4_5_G125,G64,G63,G161,G126,G185"),
          "G125,G64,G63,G161,G126,G185"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_6 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("2_4_6_G130,G131"),
          "G130,G131"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        null !== t.querySelector("input, textarea, button, select, a") &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation("2_4_7_G149,G165,G195,C15,SCR31"),
            "G149,G165,G195,C15,SCR31"
          );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8 = {
      register: function() {
        return ["link"];
      },
      process: function(e, t) {
        "head" !== e.parentNode.nodeName.toLowerCase() &&
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            e,
            _global.HTMLCS.getTranslation("2_4_8_H59.1"),
            "H59.1"
          ),
          (!1 !== e.hasAttribute("rel") &&
            e.getAttribute("rel") &&
            !0 !== /^\s*$/.test(e.getAttribute("rel"))) ||
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation("2_4_8_H59.2a"),
              "H59.2a"
            ),
          (!1 !== e.hasAttribute("href") &&
            e.getAttribute("href") &&
            !0 !== /^\s*$/.test(e.getAttribute("href"))) ||
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation("2_4_8_H59.2b"),
              "H59.2b"
            );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_9 = {
      register: function() {
        return ["a"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("2_4_9_H30"),
          "H30"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1 = {
      register: function() {
        return ["html"];
      },
      process: function(e, t) {
        if (!1 === e.hasAttribute("lang") && !1 === e.hasAttribute("xml:lang"))
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            e,
            _global.HTMLCS.getTranslation("3_1_1_H57.2"),
            "H57.2"
          );
        else {
          if (!0 === e.hasAttribute("lang")) {
            var n = e.getAttribute("lang");
            !1 === this.isValidLanguageTag(n) &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                t,
                _global.HTMLCS.getTranslation("3_1_1_H57.3.Lang"),
                "H57.3.Lang"
              );
          }
          if (!0 === e.hasAttribute("xml:lang")) {
            n = e.getAttribute("xml:lang");
            !1 === this.isValidLanguageTag(n) &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                t,
                _global.HTMLCS.getTranslation("3_1_1_H57.3.XmlLang"),
                "H57.3.XmlLang"
              );
          }
        }
      },
      isValidLanguageTag: function(e) {
        var t = !0;
        return (
          !1 ===
            new RegExp(
              "^([ix](-[a-z0-9]{1,8})+)$|^[a-z]{2,8}(-[a-z]{3}){0,3}(-[a-z]{4})?(-[a-z]{2}|-[0-9]{3})?(-[0-9][a-z0-9]{3}|-[a-z0-9]{5,8})*(-[a-wy-z0-9](-[a-z0-9]{2,8})+)*(-x(-[a-z0-9]{1,8})+)?$",
              "i"
            ).test(e) && (t = !1),
          t
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("3_1_2_H58"),
          "H58"
        );
        for (
          var n = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1,
            i = HTMLCS.util.getAllElements(t, "*[lang]"),
            a = 0;
          a <= i.length;
          a++
        ) {
          if (a === i.length) var r = t;
          else r = i[a];
          if (!r.documentElement && "html" !== r.nodeName.toLowerCase()) {
            if (!0 === r.hasAttribute("lang")) {
              var o = r.getAttribute("lang");
              !1 === n.isValidLanguageTag(o) &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  r,
                  _global.HTMLCS.getTranslation("3_1_2_H58.1.Lang"),
                  "H58.1.Lang"
                );
            }
            if (!0 === r.hasAttribute("xml:lang")) {
              o = r.getAttribute("xml:lang");
              !1 === n.isValidLanguageTag(o) &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  r,
                  _global.HTMLCS.getTranslation("3_1_2_H58.1.XmlLang"),
                  "H58.1.XmlLang"
                );
            }
          }
        }
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("3_1_3_H40,H54,H60,G62,G70"),
          "H40,H54,H60,G62,G70"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_4 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("3_1_4_G102,G55,G62,H28,G97"),
          "G102,G55,G62,H28,G97"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("3_1_5_G86,G103,G79,G153,G160"),
          "G86,G103,G79,G153,G160"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6 = {
      register: function() {
        return ["ruby"];
      },
      process: function(e, t) {
        var n = e.querySelectorAll("rb");
        0 === e.querySelectorAll("rt").length &&
          (0 === n.length
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation("3_1_6_H62.1.HTML5"),
                "H62.1.HTML5"
              )
            : HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation("3_1_6_H62.1.XHTML11"),
                "H62.1.XHTML11"
              )),
          0 === e.querySelectorAll("rp").length &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation("3_1_6_H62.2"),
              "H62.2"
            );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_1 = {
      register: function() {
        return ["input", "textarea", "button", "select"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("3_2_1_G107"),
          "G107"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2 = {
      register: function() {
        return ["form"];
      },
      process: function(e, t) {
        "form" === e.nodeName.toLowerCase() && this.checkFormSubmitButton(e);
      },
      checkFormSubmitButton: function(t) {
        var n = !1;
        if (
          0 < t.querySelectorAll("input[type=submit], input[type=image]").length
        )
          n = !0;
        else {
          var e = t.querySelectorAll("button"),
            i = t.querySelectorAll("button[type=reset], button[type=button]");
          e.length > i.length && (n = !0);
        }
        if (!1 === n && t.id) {
          var a = document.querySelectorAll(
            "button[form], input[form][type=submit], input[form][type=image]"
          );
          Array.prototype.slice.call(a).forEach(function(e) {
            switch (e.getAttribute("type")) {
              case "reset":
              case "button":
                return;
            }
            e.attributes.form.value === t.id && (n = !0);
          });
        }
        !1 === n &&
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t,
            _global.HTMLCS.getTranslation("3_2_2_H32.2"),
            "H32.2"
          );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_3 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("3_2_3_G61"),
          "G61"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_4 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation("3_2_4_G197"),
          "G197"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5 = {
      register: function() {
        return ["a"];
      },
      process: function(e, t) {
        "a" === e.nodeName.toLowerCase() && this.checkNewWindowTarget(e);
      },
      checkNewWindowTarget: function(e) {
        !0 === e.hasAttribute("target") &&
          ("_blank" === (e.getAttribute("target") || "") &&
            !1 === /new window/i.test(e.innerHTML) &&
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              e,
              _global.HTMLCS.getTranslation("3_2_5_H83.3"),
              "H83.3"
            ));
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_1 = {
      register: function() {
        return ["form"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("3_3_1_G83,G84,G85"),
          "G83,G84,G85"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2 = {
      register: function() {
        return ["form"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("3_3_2_G131,G89,G184,H90"),
          "G131,G89,G184,H90"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_3 = {
      register: function() {
        return ["form"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("3_3_3_G177"),
          "G177"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4 = {
      register: function() {
        return ["form"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation(
            "3_3_4_G98,G99,G155,G164,G168.LegalForms"
          ),
          "G98,G99,G155,G164,G168.LegalForms"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_5 = {
      register: function() {
        return ["form"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation("3_3_5_G71,G184,G193"),
          "G71,G184,G193"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_6 = {
      register: function() {
        return ["form"];
      },
      process: function(e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation(
            "3_3_6_G98,G99,G155,G164,G168.AllForms"
          ),
          "G98,G99,G155,G164,G168.AllForms"
        );
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_1 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        if (e === t)
          for (
            var n = HTMLCS.util.getAllElements(t, "*[id]"), i = {}, a = 0;
            a < n.length;
            a++
          ) {
            var r = n[a].getAttribute("id");
            !0 !== /^\s*$/.test(r) &&
              (void 0 !== i[r]
                ? HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    n[a],
                    _global.HTMLCS.getTranslation("4_1_1_F77").replace(
                      /\{\{id\}\}/g,
                      r
                    ),
                    "F77"
                  )
                : (i[r] = !0));
          }
      }
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_2 = {
      register: function() {
        return ["_top"];
      },
      process: function(e, t) {
        if (e === t) {
          for (
            var n = this.processFormControls(t), i = 0;
            i < n.errors.length;
            i++
          )
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              n.errors[i].element,
              n.errors[i].msg,
              "H91." + n.errors[i].subcode
            );
          for (i = 0; i < n.warnings.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              n.warnings[i].element,
              n.warnings[i].msg,
              "H91." + n.warnings[i].subcode
            );
          this.addProcessLinksMessages(t);
        }
      },
      addProcessLinksMessages: function(e) {
        for (var t = this.processLinks(e), n = 0; n < t.empty.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.empty[n],
            _global.HTMLCS.getTranslation("4_1_2_H91.A.Empty"),
            "H91.A.Empty"
          );
        for (n = 0; n < t.emptyWithName.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.emptyWithName[n],
            _global.HTMLCS.getTranslation("4_1_2_H91.A.EmptyWithName"),
            "H91.A.EmptyWithName"
          );
        for (n = 0; n < t.emptyNoId.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.emptyNoId[n],
            _global.HTMLCS.getTranslation("4_1_2_H91.A.EmptyNoId"),
            "H91.A.EmptyNoId"
          );
        for (n = 0; n < t.noHref.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.noHref[n],
            _global.HTMLCS.getTranslation("4_1_2_H91.A.NoHref"),
            "H91.A.NoHref"
          );
        for (n = 0; n < t.placeholder.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.placeholder[n],
            _global.HTMLCS.getTranslation("4_1_2_H91.A.Placeholder"),
            "H91.A.Placeholder"
          );
        for (n = 0; n < t.noContent.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.noContent[n],
            _global.HTMLCS.getTranslation("4_1_2_H91.A.NoContent"),
            "H91.A.NoContent"
          );
      },
      processLinks: function(e) {
        for (
          var t = {
              empty: [],
              emptyWithName: [],
              emptyNoId: [],
              noHref: [],
              placeholder: [],
              noContent: []
            },
            n = HTMLCS.util.getAllElements(e, 'a:not([role="button"])'),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i],
            r = !1,
            o = !1,
            s = HTMLCS.util.getElementTextContent(a);
          !0 === a.hasAttribute("title") &&
          !1 === /^\s*$/.test(a.getAttribute("title"))
            ? (r = !0)
            : !1 === /^\s*$/.test(s) && (r = !0),
            !0 === a.hasAttribute("href") &&
              !1 === /^\s*$/.test(a.getAttribute("href")) &&
              (o = !0),
            !1 === o
              ? !0 === /^\s*$/.test(s)
                ? !0 === a.hasAttribute("id")
                  ? t.empty.push(a)
                  : !0 === a.hasAttribute("name")
                  ? t.emptyWithName.push(a)
                  : t.emptyNoId.push(a)
                : !0 === a.hasAttribute("id") || !0 === a.hasAttribute("name")
                ? t.noHref.push(a)
                : t.placeholder.push(a)
              : !1 === r &&
                0 === a.querySelectorAll("img").length &&
                !1 === HTMLCS.util.hasValidAriaLabel(a) &&
                t.noContent.push(a);
        }
        return t;
      },
      processFormControls: function(e) {
        for (
          var t = HTMLCS.util.getAllElements(
              e,
              'button, fieldset, input, select, textarea, [role="button"]'
            ),
            n = [],
            i = [],
            a = {
              button: ["@title", "_content", "@aria-label", "@aria-labelledby"],
              fieldset: ["legend", "@aria-label", "@aria-labelledby"],
              input_button: ["@value", "@aria-label", "@aria-labelledby"],
              input_text: [
                "label",
                "@title",
                "@aria-label",
                "@aria-labelledby"
              ],
              input_file: [
                "label",
                "@title",
                "@aria-label",
                "@aria-labelledby"
              ],
              input_password: [
                "label",
                "@title",
                "@aria-label",
                "@aria-labelledby"
              ],
              input_checkbox: [
                "label",
                "@title",
                "@aria-label",
                "@aria-labelledby"
              ],
              input_radio: [
                "label",
                "@title",
                "@aria-label",
                "@aria-labelledby"
              ],
              input_image: [
                "@alt",
                "@title",
                "@aria-label",
                "@aria-labelledby"
              ],
              select: ["label", "@title", "@aria-label", "@aria-labelledby"],
              textarea: ["label", "@title", "@aria-label", "@aria-labelledby"]
            },
            r = [
              "email",
              "search",
              "date",
              "datetime-local",
              "month",
              "number",
              "tel",
              "time",
              "url",
              "week",
              "range",
              "color"
            ],
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          a["input_" + r[o]] = [
            "label",
            "@title",
            "@aria-label",
            "@aria-labelledby"
          ];
        for (
          var l = { select: "option_selected" }, u = 0, d = t.length;
          u < d;
          u++
        ) {
          var _ = t[u],
            c = _.nodeName.toLowerCase(),
            p =
              _.nodeName.substr(0, 1).toUpperCase() +
              _.nodeName.substr(1).toLowerCase();
          if ("input" === c) {
            !1 === _.hasAttribute("type")
              ? (c += "_text")
              : (c += "_" + _.getAttribute("type").toLowerCase()),
              ("input_submit" !== c && "input_reset" !== c) ||
                (c = "input_button");
            p =
              "Input" +
              c.substr(6, 1).toUpperCase() +
              c.substr(7).toLowerCase();
          }
          var m = a[c],
            g = l[c];
          if (
            (m ||
              "input_hidden" === c ||
              (m = ["_content", "@aria-label", "@aria-labelledby"]),
            m)
          ) {
            for (o = 0; o < m.length; o++) {
              var h = m[o];
              if ("_content" === h) {
                var b = HTMLCS.util.getElementTextContent(_);
                if (!1 === /^\s*$/.test(b)) break;
              } else if ("label" === h) {
                if (
                  !1 !==
                  HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testLabelsOnInputs(
                    _,
                    e,
                    !0
                  )
                )
                  break;
              } else if ("@" === h.charAt(0)) {
                if (
                  ("aria-label" === (h = h.substr(1, h.length)) ||
                    "aria-labelledby" === h) &&
                  HTMLCS.util.hasValidAriaLabel(_)
                )
                  break;
                if (
                  !0 === _.hasAttribute(h) &&
                  !1 === /^\s*$/.test(_.getAttribute(h))
                )
                  break;
              } else {
                var f = _.querySelector(h);
                if (null !== f) {
                  b = HTMLCS.util.getElementTextContent(f);
                  if (!1 === /^\s*$/.test(b)) break;
                }
              }
            }
            if (o === m.length) {
              var C = c + " " + _global.HTMLCS.getTranslation("4_1_2_element");
              "input_" === c.substr(0, 6) &&
                (C =
                  c.substr(6) +
                  _global.HTMLCS.getTranslation("4_1_2_input_element")),
                _.hasAttribute("role") &&
                  "button" === _.getAttribute("role") &&
                  (C = _global.HTMLCS.getTranslation("4_1_2_role_of_button"));
              for (var T = m.slice(0, m.length), H = 0; H < T.length; H++)
                "_content" === T[H]
                  ? (T[H] = _global.HTMLCS.getTranslation(
                      "4_1_2_element_content"
                    ))
                  : "@" === T[H].charAt(0)
                  ? (T[H] =
                      T[H].substr(1) +
                      " " +
                      _global.HTMLCS.getTranslation("4_1_2_attribute"))
                  : (T[H] =
                      T[H] +
                      " " +
                      _global.HTMLCS.getTranslation("4_1_2_element"));
              var y = _global.HTMLCS.getTranslation("4_1_2_msg_pattern")
                .replace(/\{\{msgNodeType\}\}/g, C)
                .replace(/\{\{builtAttrs\}\}/g, T.join(", "));
              n.push({ element: _, msg: y, subcode: p + ".Name" });
            }
          }
          var S = !1;
          if (void 0 === g) S = !0;
          else if ("_content" === g) {
            b = HTMLCS.util.getElementTextContent(_);
            !1 === /^\s*$/.test(b) && (S = !0);
          } else if ("option_selected" === g) {
            if (!1 === _.hasAttribute("multiple"))
              null !== _.querySelector("option[selected]") && (S = !0);
            else S = !0;
          } else
            "@" === g.charAt(0) &&
              ((g = g.substr(1, g.length)),
              !0 === _.hasAttribute(g) && (S = !0));
          if (
            (!1 === S && (valuFound = HTMLCS.util.hasValidAriaLabel(_)),
            !1 === S)
          ) {
            C = c + " " + _global.HTMLCS.getTranslation("4_1_2_element");
            "input_" === c.substr(0, 6) && (C = c.substr(6) + " input element");
            y = _global.HTMLCS.getTranslation("4_1_2_msg_pattern2").replace(
              /\{\{msgNodeType\}\}/g,
              C
            );
            var M = "",
              L = !1;
            "_content" === g
              ? (M = " " + _global.HTMLCS.getTranslation("4_1_2_msg_add_one"))
              : "option_selected" === g
              ? ((L = !0),
                (y = _global.HTMLCS.getTranslation(
                  "4_1_2_msg_pattern2"
                ).replace(/\{\{msgNodeType\}\}/g, C)))
              : (M =
                  "@" === g.charAt(0)
                    ? " " +
                      _global.HTMLCS.getTranslation(
                        "4_1_2_value_exposed_using_attribute"
                      ).replace(/\{\{requiredValue\}\}/g, g)
                    : " " +
                      _global.HTMLCS.getTranslation(
                        "4_1_2_value_exposed_using_element"
                      ).replace(/\{\{requiredValue\}\}/g, g)),
              (y += M),
              !1 === L
                ? n.push({ element: _, msg: y, subcode: p + ".Value" })
                : i.push({ element: _, msg: y, subcode: p + ".Value" });
          }
        }
        return { errors: n, warnings: i };
      }
    }),
    (_global.HTMLCS = new function() {
      var n = { skipIframes: !1 },
        _ = {},
        o = [],
        l = {},
        s = null,
        u = null,
        d = [],
        r = {};
      (this.ERROR = 1),
        (this.WARNING = 2),
        (this.NOTICE = 3),
        (this.getBosaOption = function(e) {
          return n[e];
        }),
        (this.setBosaOption = function(e, t) {
          n[e] = t;
        }),
        (this.lang = "en"),
        (this.process = function(e, t, n, i, a) {
          if (((_ = {}), (o = []), (l = {}), (s = null), !t)) return !1;
          var r = Object.keys(_global.translation);
          a && -1 !== r.indexOf(a) && (this.lang = a),
            _[T(e)]
              ? HTMLCS.run(n, t)
              : this.loadStandard(
                  e,
                  function() {
                    HTMLCS.run(n, t);
                  },
                  i
                );
        }),
        (this.getTranslation = function(t) {
          try {
            return _global.translation[this.lang][t];
          } catch (e) {
            throw new Error(
              'Translation for "' +
                t +
                '" does not exist in current language ' +
                this.lang
            );
          }
        }),
        (this.loadStandard = function(e, t, n) {
          if (!e) return !1;
          m(
            e,
            function() {
              (s = e), t.call(this);
            },
            n
          );
        }),
        (this.run = function(n, i) {
          var a = null,
            e = !1;
          if ("string" == typeof i) {
            e = !0;
            var t = document.createElement("iframe");
            (t.style.display = "none"),
              (t = document.body.insertBefore(t, null)).contentDocument
                ? (a = t.contentDocument)
                : a.contentWindow && (a = t.contentWindow.document),
              (t.load = function() {
                if (
                  ((this.onreadystatechange = null),
                  (this.onload = null),
                  !1 === HTMLCS.isFullDoc(i))
                ) {
                  var e = (a = a.getElementsByTagName(
                    "body"
                  )[0]).getElementsByTagName("div")[0];
                  e &&
                    "__HTMLCS-source-wrap" === e.id &&
                    ((e.id = ""), (a = e));
                }
                var t = HTMLCS.util.getAllElements(a);
                t.unshift(a), c(t, a, n);
              }),
              (t.onreadystatechange = function() {
                !0 === /^(complete|loaded)$/.test(this.readyState) &&
                  ((this.onreadystatechange = null), this.load());
              }),
              (t.onload = t.load),
              !1 === HTMLCS.isFullDoc(i) && -1 === i.indexOf("<body")
                ? a.write('<div id="__HTMLCS-source-wrap">' + i + "</div>")
                : a.write(i),
              a.close();
          } else a = i;
          if (a) {
            (n = n || function() {}), (d = []);
            var r = HTMLCS.util.getAllElements(a);
            r.unshift(a), !1 === e && c(r, a, n);
          } else n.call(this);
        }),
        (this.isFullDoc = function(e) {
          var t = !1;
          return (
            "string" == typeof e
              ? -1 !== e.toLowerCase().indexOf("<html")
                ? (t = !0)
                : -1 !== e.toLowerCase().indexOf("<head") &&
                  -1 !== e.toLowerCase().indexOf("<body") &&
                  (t = !0)
              : ("html" === e.nodeName.toLowerCase() || e.documentElement) &&
                (t = !0),
            t
          );
        }),
        (this.addMessage = function(e, t, n, i, a) {
          (i = y(i)),
            d.push({ type: e, element: t, msg: r[i] || n, code: i, data: a });
        }),
        (this.getMessages = function() {
          return d.concat([]);
        });
      var c = function(e, t, n) {
          for (var i = []; 0 < e.length; ) {
            var a = e.shift();
            if (a === t) var r = "_top";
            else r = a.tagName.toLowerCase();
            for (var o = 0; o < i.length; )
              a === i[o].element ? (d.push(i[o]), i.splice(o, 1)) : o++;
            l[r] &&
              0 < l[r].length &&
              (p(a, l[r].concat([]), t), "_top" === r && ((i = d), (d = [])));
          }
          d = d.concat(i);
          var s = t.querySelectorAll('[role="presentation"]');
          (u = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1),
            [].forEach.call(s, function(e) {
              u.testSemanticPresentationRole(e);
            }),
            n instanceof Function == !0 && n.call(this);
        },
        p = function(e, t, n, i) {
          for (; 0 < t.length; ) {
            var a = t.shift();
            !0 === (u = a).useCallback
              ? a.process(e, n, function() {
                  p(e, t, n), (t = []);
                })
              : a.process(e, n);
          }
          i instanceof Function == !0 && i.call(this);
        },
        m = function(e, t, n, i) {
          0 !== e.indexOf("http") && (e = T(e));
          var a = e.split("/");
          _global["HTMLCS_" + a[a.length - 2]]
            ? g(e, t, n, i)
            : S(
                e,
                function() {
                  g(e, t, n, i);
                },
                n
              );
        },
        g = function(e, t, n, i) {
          var a = e.split("/"),
            r = _global["HTMLCS_" + a[a.length - 2]],
            o = {};
          for (var s in r) !0 === r.hasOwnProperty(s) && (o[s] = r[s]);
          if (!o) return !1;
          if (((_[e] = o), i))
            if (i.include && 0 < i.include.length) o.sniffs = i.include;
            else if (i.exclude)
              for (var l = 0; l < i.exclude.length; l++) {
                var u = o.sniffs.find(i.exclude[l]);
                0 <= u && o.sniffs.splice(u, 1);
              }
          var d = o.sniffs.slice(0, o.sniffs.length);
          h(e, d, t, n);
        },
        h = function(e, t, n, i) {
          if (0 !== t.length) {
            var a = t.shift();
            b(
              e,
              a,
              function() {
                h(e, t, n, i);
              },
              i
            );
          } else n.call(this);
        },
        b = function(e, t, n, i) {
          if ("string" == typeof t) {
            var a = function() {
              f(e, t), n.call(this);
            };
            H(e, t) ? a() : S(C(e, t), a, i);
          } else
            m(
              t.standard,
              function() {
                if (t.messages) for (var e in t.messages) r[e] = t.messages[e];
                n.call(this);
              },
              i,
              { exclude: t.exclude, include: t.include }
            );
        },
        f = function(e, t) {
          var n = H(e, t);
          if (!n) return !1;
          if (n.register)
            for (var i = n.register(), a = 0; a < i.length; a++)
              l[i[a]] || (l[i[a]] = []), l[i[a]].push(n);
          o.push(n);
        },
        C = function(e, t) {
          var n = e.split("/");
          return (
            n.pop(), n.join("/") + "/Sniffs/" + t.replace(/\./g, "/") + ".js"
          );
        },
        T = function(e) {
          for (
            var t = document.getElementsByTagName("script"), n = null, i = 0;
            i < t.length;
            i++
          )
            if (t[i].src && t[i].src.match(/HTMLCS\.js/)) {
              n = (n = t[i].src.replace(/HTMLCS\.js/, "")).substring(
                0,
                n.indexOf("?")
              );
              break;
            }
          return n + "Standards/" + e + "/ruleset.js";
        },
        H = function(e, t) {
          var n = "HTMLCS_";
          return (
            (n += _[e].name + "_Sniffs_"),
            (n += t.split(".").join("_")),
            _global[n] ? ((_global[n]._name = t), _global[n]) : null
          );
        },
        y = function(e) {
          return (e = s + "." + u._name + "." + e);
        },
        S = function(e, t, n) {
          var i = document.createElement("script");
          (i.onload = function() {
            (i.onload = null), (i.onreadystatechange = null), t.call(this);
          }),
            (i.onerror = function() {
              (i.onload = null),
                (i.onreadystatechange = null),
                n && n.call(this);
            }),
            (i.onreadystatechange = function() {
              !0 === /^(complete|loaded)$/.test(this.readyState) &&
                ((i.onreadystatechange = null), i.onload());
            }),
            (i.src = e),
            document.head
              ? document.head.appendChild(i)
              : document.getElementsByTagName("head")[0].appendChild(i);
        };
    }()),
    (_global.HTMLCS.util = (function() {
      var T = {
        trim: function(e) {
          return e.replace(/^\s*(.*)\s*$/g, "$1");
        },
        isStringEmpty: function(e) {
          if ("string" != typeof e) return !0;
          var t = !0;
          return (
            -1 !== e.indexOf(String.fromCharCode(160))
              ? (t = !1)
              : !1 === /^\s*$/.test(e) && (t = !1),
            t
          );
        },
        getDocumentType: function(e) {
          var t = null,
            n = e.doctype;
          if (n) {
            var i = n.name,
              a = n.publicId,
              r = n.systemId;
            if (
              (null === i && (i = ""),
              null === r && (r = ""),
              null === a && (a = ""),
              "html" === i.toLowerCase())
            )
              if (
                ("" === a && "" === r
                  ? (t = "html5")
                  : -1 !== a.indexOf("//DTD HTML 4.01") ||
                    -1 !== r.indexOf("w3.org/TR/html4/strict.dtd")
                  ? (t = "html401")
                  : -1 !== a.indexOf("//DTD HTML 4.0") ||
                    -1 !== r.indexOf("w3.org/TR/REC-html40/strict.dtd")
                  ? (t = "html40")
                  : -1 !== a.indexOf("//DTD XHTML 1.0 Strict") &&
                    -1 !== r.indexOf("w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd")
                  ? (t = "xhtml10")
                  : -1 !== a.indexOf("//DTD XHTML 1.1") &&
                    -1 !== r.indexOf("w3.org/TR/xhtml11/DTD/xhtml11.dtd") &&
                    (t = "xhtml11"),
                -1 !== r.indexOf("about:legacy-compat"))
              )
                if ("application/xhtml+xml" === e.contentType)
                  "http://www.w3.org/1999/xhtml" ===
                    e.querySelector("html").getAttribute("xmlns") &&
                    (t = "xhtml5");
          } else {
            if ("application/xhtml+xml" === e.contentType)
              "http://www.w3.org/1999/xhtml" ===
                e.querySelector("html").getAttribute("xmlns") && (t = "xhtml5");
          }
          return t;
        },
        getElementWindow: function(e) {
          if (e.ownerDocument) var t = e.ownerDocument;
          else t = e;
          return t.defaultView ? t.defaultView : t.parentWindow;
        },
        hasValidAriaLabel: function(e) {
          var i = !1;
          if (!0 === e.hasAttribute("aria-labelledby"))
            e.getAttribute("aria-labelledby")
              .split(/\s+/)
              .forEach(function(e) {
                var t = document.getElementById(e);
                if (t) {
                  var n = T.getElementTextContent(t);
                  !1 === /^\s*$/.test(n) && (i = !0);
                }
              });
          else if (!0 === e.hasAttribute("aria-label")) {
            var t = e.getAttribute("aria-label");
            !1 === /^\s*$/.test(t) && (i = !0);
          }
          return i;
        },
        style: function(e, t) {
          var n = null,
            i = T.getElementWindow(e);
          t = t || null;
          return (
            e.currentStyle
              ? (n = e.currentStyle)
              : i.getComputedStyle && (n = i.getComputedStyle(e, t)),
            n
          );
        },
        isVisuallyHidden: function(e) {
          var t = !1;
          if (
            "title" === e.nodeName.toLowerCase() &&
            null !== T.findParentNode(e, "svg")
          )
            return !0;
          var n = T.style(e);
          return (
            null !== n &&
              (("hidden" !== n.visibility && "none" !== n.display) || (t = !0),
              parseInt(n.left, 10) + parseInt(n.width, 10) < 0 && (t = !0),
              parseInt(n.top, 10) + parseInt(n.height, 10) < 0 && (t = !0)),
            t
          );
        },
        isAriaHidden: function(e) {
          do {
            if (
              e.hasAttribute("aria-hidden") &&
              "true" === e.getAttribute("aria-hidden")
            )
              return !0;
          } while ((e = e.parentElement));
          return !1;
        },
        isAccessibilityHidden: function(e) {
          do {
            if (
              e.hasAttribute("role") &&
              "presentation" === e.getAttribute("role")
            )
              return !0;
            if (
              e.hasAttribute("aria-hidden") &&
              "true" === e.getAttribute("aria-hidden")
            )
              return !0;
            if (
              "IFRAME" == e.tagName &&
              1 == HTMLCS.getBosaOption("skipIframes")
            )
              return !0;
          } while ((e = e.parentElement));
          return !1;
        },
        isFocusable: function(e) {
          var t = e.nodeName.toLowerCase();
          return (
            !0 !== T.isDisabled(e) &&
            (!0 !== T.isVisuallyHidden(e) &&
              (!!/^(input|select|textarea|button|object)$/.test(t) ||
                !(
                  "a" !== t ||
                  !e.hasAttribute("href") ||
                  !1 !== /^\s*$/.test(e.getAttribute("href"))
                )))
          );
        },
        isKeyboardTabbable: function(e) {
          return !0 !== e.hasAttribute("tabindex")
            ? T.isFocusable(e)
            : "-1" !== e.getAttribute("tabindex");
        },
        isKeyboardNavigable: function(e) {
          return (
            !(
              !e.hasAttribute("accesskey") ||
              !1 !== /^\s*$/.test(e.getAttribute("accesskey"))
            ) || T.isKeyboardTabbable(e)
          );
        },
        isDisabled: function(e) {
          var t = !1;
          return (
            (!0 !== e.disabled && "true" !== e.getAttribute("aria-disabled")) ||
              (t = !0),
            t
          );
        },
        isInDocument: function(e) {
          for (var t = e.parentNode; t && t.ownerDocument; ) t = t.parentNode;
          return null !== t;
        },
        getAllElements: function(e, t) {
          (e = e || document), (t = t || "*");
          var n = Array.prototype.slice
              .call(e.querySelectorAll(t))
              .filter(function(e) {
                return !1 === HTMLCS.util.isAccessibilityHidden(e);
              }),
            i = document.getElementById("HTMLCS-wrapper");
          return (
            i &&
              (n = n.filter(function(e) {
                return !1 === i.contains(e);
              })),
            n
          );
        },
        contains: function(e, t) {
          var n = !1;
          return (
            e !== t &&
              (e.ownerDocument
                ? e.contains && !0 === e.contains(t)
                  ? (n = !0)
                  : e.compareDocumentPosition &&
                    0 < (16 & e.compareDocumentPosition(t)) &&
                    (n = !0)
                : t.ownerDocument && t.ownerDocument === e && (n = !0)),
            n
          );
        },
        isLayoutTable: function(e) {
          return null === e.querySelector("th");
        },
        contrastRatio: function(e, t) {
          var n = (0.05 + T.relativeLum(e)) / (0.05 + T.relativeLum(t));
          return n < 1 && (n = 1 / n), n;
        },
        relativeLum: function(e) {
          if (e.charAt) e = T.colourStrToRGB(e);
          var t = {};
          for (var n in e)
            e[n] <= 0.03928
              ? (t[n] = e[n] / 12.92)
              : (t[n] = Math.pow((e[n] + 0.055) / 1.055, 2.4));
          return 0.2126 * t.red + 0.7152 * t.green + 0.0722 * t.blue;
        },
        colourStrToRGB: function(e) {
          if ("rgb" === (e = e.toLowerCase()).substring(0, 3)) {
            var t = /^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(e);
            (e = {
              red: t[1] / 255,
              green: t[2] / 255,
              blue: t[3] / 255,
              alpha: 1
            }),
              t[4] && (e.alpha = parseFloat(/^,\s*(.*)$/.exec(t[4])[1]));
          } else {
            "#" === e.charAt(0) && (e = e.substr(1)),
              3 === e.length && (e = e.replace(/^(.)(.)(.)$/, "$1$1$2$2$3$3")),
              4 === e.length &&
                (e = e.replace(/^(.)(.)(.)(.)$/, "$1$1$2$2$3$3$4$4"));
            var n = 1;
            8 === e.length && (n = parseInt(e.substr(6, 2), 16) / 255),
              (e = {
                red: parseInt(e.substr(0, 2), 16) / 255,
                green: parseInt(e.substr(2, 2), 16) / 255,
                blue: parseInt(e.substr(4, 2), 16) / 255,
                alpha: n
              });
          }
          return e;
        },
        RGBtoColourStr: function(e) {
          return (
            (colourStr = "#"),
            (e.red = Math.round(255 * e.red)),
            (e.green = Math.round(255 * e.green)),
            (e.blue = Math.round(255 * e.blue)),
            e.red % 17 == 0 && e.green % 17 == 0 && e.blue % 17 == 0
              ? ((colourStr += (e.red / 17).toString(16)),
                (colourStr += (e.green / 17).toString(16)),
                (colourStr += (e.blue / 17).toString(16)))
              : (e.red < 16 && (colourStr += "0"),
                (colourStr += e.red.toString(16)),
                e.green < 16 && (colourStr += "0"),
                (colourStr += e.green.toString(16)),
                e.blue < 16 && (colourStr += "0"),
                (colourStr += e.blue.toString(16))),
            colourStr
          );
        },
        sRGBtoHSV: function(e) {
          e.charAt && (e = T.colourStrToRGB(e));
          var t = { hue: 0, saturation: 0, value: 0 },
            n = Math.max(e.red, e.green, e.blue),
            i = n - Math.min(e.red, e.green, e.blue);
          return (
            0 === i
              ? (t.value = e.red)
              : ((t.value = n) === e.red
                  ? (t.hue = (e.green - e.blue) / i)
                  : n === e.green
                  ? (t.hue = 2 + (e.blue - e.red) / i)
                  : (t.hue = 4 + (e.red - e.green) / i),
                (t.hue = 60 * t.hue),
                360 <= t.hue && (t.hue -= 360),
                (t.saturation = i / t.value)),
            t
          );
        },
        HSVtosRGB: function(e) {
          var t = { red: 0, green: 0, blue: 0 };
          if (0 === e.saturation)
            (t.red = e.value), (t.green = e.value), (t.blue = e.value);
          else {
            var n = e.value * e.saturation,
              i = e.value - n,
              a = e.hue / 60,
              r = a - 2 * Math.floor(a / 2),
              o = n * (1 - Math.abs(r - 1));
            switch (Math.floor(a)) {
              case 0:
                (t.red = n), (t.green = o);
                break;
              case 1:
                (t.green = n), (t.red = o);
                break;
              case 2:
                (t.green = n), (t.blue = o);
                break;
              case 3:
                (t.blue = n), (t.green = o);
                break;
              case 4:
                (t.blue = n), (t.red = o);
                break;
              case 5:
                (t.red = n), (t.blue = o);
            }
            (t.red = t.red + i), (t.green = t.green + i), (t.blue = t.blue + i);
          }
          return t;
        },
        getElementTextContent: function(e, t) {
          void 0 === t && (t = !0);
          e = e.cloneNode(!0);
          for (var n = [], i = 0; i < e.childNodes.length; i++)
            n.push(e.childNodes[i]);
          for (var a = [e.textContent]; 0 < n.length; ) {
            var r = n.shift();
            if (1 === r.nodeType)
              if ("img" === r.nodeName.toLowerCase())
                !0 === t &&
                  !0 === r.hasAttribute("alt") &&
                  a.push(r.getAttribute("alt"));
              else
                for (i = 0; i < r.childNodes.length; i++)
                  n.push(r.childNodes[i]);
            else 3 === r.nodeType && a.push(r.nodeValue);
          }
          return (a = a.join("").replace(/^\s+|\s+$/g, ""));
        },
        findParentNode: function(e, t) {
          if (e && e.matches && e.matches(t)) return e;
          for (; e && e.parentNode; )
            if ((e = e.parentNode) && e.matches && e.matches(t)) return e;
          return null;
        },
        eachParentNode: function(e, t) {
          for (; e && e.parentNode; ) t(e), (e = e.parentNode);
        },
        isPhrasingNode: function(e) {
          return (
            -1 !==
            [
              "abbr",
              "audio",
              "b",
              "bdo",
              "br",
              "button",
              "canvas",
              "cite",
              "code",
              "command",
              "data",
              "datalist",
              "dfn",
              "em",
              "embed",
              "i",
              "iframe",
              "img",
              "input",
              "kbd",
              "keygen",
              "label",
              "mark",
              "math",
              "meter",
              "noscript",
              "object",
              "output",
              "progress",
              "q",
              "ruby",
              "samp",
              "script",
              "select",
              "small",
              "span",
              "strong",
              "sub",
              "sup",
              "svg",
              "textarea",
              "time",
              "var",
              "video",
              "wbr"
            ].indexOf(e.toLowerCase())
          );
        },
        getChildrenForTable: function(e, t) {
          if ("table" !== e.nodeName.toLowerCase()) return null;
          for (
            var n = [], i = e.getElementsByTagName(t), a = 0, r = i.length;
            a < r;
            a++
          )
            T.findParentNode(i[a], "table") === e && n.push(i[a]);
          return n;
        },
        testTableHeaders: function(e) {
          for (
            var t = {
                required: !0,
                used: !1,
                correct: !0,
                allowScope: !0,
                missingThId: [],
                missingTd: [],
                wrongHeaders: []
              },
              n = T.getChildrenForTable(e, "tr"),
              i = [],
              a = { rows: [], cols: [] },
              r = { rows: 0, cols: 0 },
              o = 0;
            o < n.length;
            o++
          )
            for (var s = n[o], l = 0, u = 0; u < s.childNodes.length; u++) {
              if (1 === (h = s.childNodes[u]).nodeType) {
                if (i[o]) for (; i[o][0] === l; ) i[o].shift(), l++;
                var d = h.nodeName.toLowerCase(),
                  _ = Number(h.getAttribute("rowspan")) || 1,
                  c = Number(h.getAttribute("colspan")) || 1;
                if (1 < _)
                  for (var p = o + 1; p < o + _; p++) {
                    i[p] || (i[p] = []);
                    for (var m = l; m < l + c; m++) i[p].push(m);
                  }
                if ("th" === d)
                  "" === (h.getAttribute("id") || "") &&
                    ((t.correct = !1), t.missingThId.push(h)),
                    1 < _ && 1 < c
                      ? (t.allowScope = !1)
                      : !0 === t.allowScope &&
                        (void 0 === a.cols[l] && (a.cols[l] = 0),
                        void 0 === a.rows[o] && (a.rows[o] = 0),
                        (a.rows[o] += c),
                        (a.cols[l] += _));
                else
                  "td" === d &&
                    !0 === h.hasAttribute("headers") &&
                    !1 === /^\s*$/.test(h.getAttribute("headers")) &&
                    (t.used = !0);
                l += c;
              }
            }
          for (p = 0; p < a.rows.length; p++) 1 < a.rows[p] && r.rows++;
          for (p = 0; p < a.cols.length; p++) 1 < a.cols[p] && r.cols++;
          1 < r.rows || 1 < r.cols
            ? (t.allowScope = !1)
            : !0 !== t.allowScope ||
              (0 !== r.rows && 0 !== r.cols) ||
              (t.required = !1);
          var g = HTMLCS.util.getCellHeaders(e);
          for (p = 0; p < g.length; p++) {
            var h = g[p].cell,
              b = g[p].headers;
            if (!1 === h.hasAttribute("headers"))
              (t.correct = !1), t.missingTd.push(h);
            else {
              var f = (h.getAttribute("headers") || "").split(/\s+/);
              if (0 === f.length) (t.correct = !1), t.missingTd.push(h);
              else if (
                b !==
                (f = (f = " " + f.sort().join(" ") + " ")
                  .replace(/\s+/g, " ")
                  .replace(/(\w+\s)\1+/g, "$1")
                  .replace(/^\s*(.*?)\s*$/g, "$1"))
              ) {
                t.correct = !1;
                var C = {
                  element: h,
                  expected: b,
                  actual: h.getAttribute("headers") || ""
                };
                t.wrongHeaders.push(C);
              }
            }
          }
          return t;
        },
        getCellHeaders: function(e) {
          if ("object" != typeof e) return null;
          if ("table" !== e.nodeName.toLowerCase()) return null;
          for (
            var t = T.getChildrenForTable(e, "tr"),
              n = [],
              i = { rows: {}, cols: {} },
              a = [],
              r = ["th", "td"],
              o = 0;
            o < r.length;
            o++
          )
            for (var s = r[o], l = 0; l < t.length; l++)
              for (var u = t[l], d = 0, _ = 0; _ < u.childNodes.length; _++) {
                var c = u.childNodes[_];
                if (1 === c.nodeType) {
                  if (n[l]) for (; n[l][d]; ) d++;
                  var p = c.nodeName.toLowerCase(),
                    m = Number(c.getAttribute("rowspan")) || 1,
                    g = Number(c.getAttribute("colspan")) || 1;
                  if (1 < m)
                    for (var h = l + 1; h < l + m; h++) {
                      n[h] || (n[h] = []);
                      for (var b = d; b < d + g; b++) n[h][b] = !0;
                    }
                  if (p === s)
                    if ("th" === p) {
                      var f = c.getAttribute("id") || "";
                      for (h = l; h < l + m; h++)
                        (i.rows[h] = i.rows[h] || { first: d, ids: [] }),
                          i.rows[h].ids.push(f);
                      for (h = d; h < d + g; h++)
                        (i.cols[h] = i.cols[h] || { first: l, ids: [] }),
                          i.cols[h].ids.push(f);
                    } else if ("td" === p) {
                      var C = [];
                      for (h = l; h < l + m; h++)
                        for (b = d; b < d + g; b++)
                          i.rows[h] &&
                            b >= i.rows[h].first &&
                            (C = C.concat(i.rows[h].ids)),
                            i.cols[b] &&
                              h >= i.cols[b].first &&
                              (C = C.concat(i.cols[b].ids));
                      if (0 < C.length)
                        (C = (C =
                          " " +
                          C.sort()
                            .filter(function(e, t, n) {
                              return n.indexOf(e) === t;
                            })
                            .join(" ") +
                          " ")
                          .replace(/\s+/g, " ")
                          .replace(/(\w+\s)\1+/g, "$1")
                          .replace(/^\s*(.*?)\s*$/g, "$1")),
                          a.push({ cell: c, headers: C });
                    }
                  d += g;
                }
              }
          return a;
        },
        getPreviousSiblingElement: function(e, t, n) {
          void 0 === t && (t = null), void 0 === n && (n = !1);
          for (var i = e.previousSibling; null !== i; ) {
            if (3 === i.nodeType) {
              if (!1 === HTMLCS.util.isStringEmpty(i.nodeValue) && !0 === n) {
                i = null;
                break;
              }
            } else if (1 === i.nodeType) {
              if (null === t || i.nodeName.toLowerCase() === t) break;
              if (!0 !== n) break;
              i = null;
              break;
            }
            i = i.previousSibling;
          }
          return i;
        },
        getNextSiblingElement: function(e, t, n) {
          void 0 === t && (t = null), void 0 === n && (n = !1);
          for (var i = e.nextSibling; null !== i; ) {
            if (3 === i.nodeType) {
              if (!1 === HTMLCS.util.isStringEmpty(i.nodeValue) && !0 === n) {
                i = null;
                break;
              }
            } else if (1 === i.nodeType) {
              if (null === t || i.nodeName.toLowerCase() === t) break;
              if (!0 !== n) break;
              i = null;
              break;
            }
            i = i.nextSibling;
          }
          return i;
        }
      };
      return T;
    })());
  var HTMLCS_RUNNER = (_global.HTMLCS_RUNNER = new function() {
    (this.run = function(e, t) {
      var a = this;
      HTMLCS.process(
        e,
        document,
        function() {
          var e = HTMLCS.getMessages(),
            t = e.length,
            n = {};
          (n[HTMLCS.ERROR] = 0), (n[HTMLCS.WARNING] = 0);
          for (var i = (n[HTMLCS.NOTICE] = 0); i < t; i++)
            a.output(e[i]), n[e[i].type]++;
          console.log("done");
        },
        function() {
          console.log(
            "Something in HTML_CodeSniffer failed to parse. Cannot run."
          ),
            console.log("done");
        },
        "en"
      );
    }),
      (this.output = function(e) {
        var t = "UNKNOWN";
        switch (e.type) {
          case HTMLCS.ERROR:
            t = _global.HTMLCS.getTranslation("auditor_error");
            break;
          case HTMLCS.WARNING:
            t = _global.HTMLCS.getTranslation("auditor_warning");
            break;
          case HTMLCS.NOTICE:
            t = _global.HTMLCS.getTranslation("auditor_notice");
        }
        var n = "";
        e.element && (n = e.element.nodeName.toLowerCase());
        var i = "";
        e.element.id && "" !== e.element.id && (i = "#" + e.element.id);
        var a = "";
        if (e.element.outerHTML) {
          var r = e.element.cloneNode(!0);
          (r.innerHTML = "..."), (a = r.outerHTML);
        }
        console.log(
          "[HTMLCS] " +
            t +
            "|" +
            e.code +
            "|" +
            n +
            "|" +
            i +
            "|" +
            e.msg +
            "|" +
            a
        );
      });
  }());
  _global.HTMLCSAuditor = new function() {
    var e, t, n;
    (WebFontConfig = { google: { families: ["Roboto"] } }),
      (e = document),
      (t = e.createElement("script")),
      (n = e.scripts[0]),
      (t.src =
        "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"),
      (t.async = !0),
      n.parentNode.insertBefore(t, n);
    var G = "HTMLCS-",
      c = "",
      k = "",
      L = [],
      A = {},
      z = null,
      N = null,
      w = [],
      b = 1,
      o = null,
      E = this;
    this.pointerContainer = null;
    var x = function(e, t, n, i) {
        var a = z.createElement("div");
        (a.id = e), (a.className = G + "button"), a.setAttribute("title", n);
        var r = z.createElement("span");
        (r.className = G + "button-icon " + G + "button-" + t),
          a.appendChild(r);
        var o = z.createTextNode(String.fromCharCode(160));
        return (
          a.appendChild(o),
          i instanceof Function == !0 &&
            (a.onclick = function() {
              !1 === /disabled/.test(a.className) && i(a);
            }),
          a
        );
      },
      v = function(e, t, n, i, a) {
        void 0 === n && (n = !1);
        var r = z.createElement("label"),
          o = "";
        (r.className = G + "checkbox"),
          (o += '<span class="' + G + 'checkbox-switch">'),
          (o += '<span class="' + G + 'checkbox-slider"></span>'),
          (o += '<input id="' + e + '" type="checkbox"'),
          !0 === n && ((o += ' checked="checked"'), (r.className += " active")),
          !0 === i &&
            ((o += ' disabled="disabled"'), (r.className += " disabled")),
          (o += ' title="' + t + '" /></span>'),
          (r.innerHTML = o);
        var s = r.getElementsByTagName("input")[0];
        return (
          (r.onclick = function(e) {
            return (
              !1 === i &&
                ((s.checked = !s.checked),
                !0 === s.checked
                  ? (r.className += " active")
                  : (r.className = r.className.replace("active", "")),
                a instanceof Function == !0 && a(s)),
              !1
            );
          }),
          r
        );
      },
      f = function(e, i) {
        var t = z.createElement("div");
        (t.className = G + "header"),
          (t.innerHTML = "BOSA Accessibility Check (Beta)"),
          t.setAttribute(
            "title",
            _global.HTMLCS.getTranslation("auditor_using_standard") + e
          );
        var a = !1,
          r = 0,
          o = 0;
        (t.onmousedown = function(e) {
          return (
            (e = e || window.event),
            (a = !0),
            (r = e.clientX),
            (o = e.clientY),
            !1
          );
        }),
          (z.onmousemove = function(e) {
            if (((e = e || window.event), !0 === a)) {
              var t = i.offsetTop,
                n = i.offsetLeft;
              o < e.clientY
                ? ((t += e.clientY - o), (i.style.top = t + "px"))
                : o > e.clientY &&
                  ((t -= o - e.clientY), (i.style.top = t + "px")),
                r < e.clientX
                  ? ((n += e.clientX - r), (i.style.left = n + "px"))
                  : r > e.clientX &&
                    ((n -= r - e.clientX), (i.style.left = n + "px")),
                (r = e.clientX),
                (o = e.clientY);
            }
          }),
          (z.onmouseup = function(e) {
            var t = window.innerHeight - i.offsetHeight;
            t < o ? (i.style.top = t + "px") : o < 0 && (i.style.top = "0px"),
              (a = !1);
          });
        var n = z.createElement("div");
        return (
          (n.className = G + "close"),
          n.setAttribute(
            "title",
            _global.HTMLCS.getTranslation("auditor_close")
          ),
          (n.onmousedown = function() {
            E.close.call(E);
          }),
          t.appendChild(n),
          t
        );
      };
    (this.bosaExportReport = function() {
      var e = window.open("", "Export"),
        t = E.bosaBuildReport(k, w, A),
        n =
          "<h2>Report for " +
          window.location.href +
          "</h2><h3>Standard: " +
          k +
          "</h3>",
        i = E.bosaAddCurrentProtocol(A.path) + "HTMLCS.css";
      return (
        (e.document.body.parentElement.innerHTML =
          "<html><head><title>Export of " +
          window.location.href +
          '</title><link rel="stylesheet" type="text/css" href="' +
          i +
          '"></head><body class="bosareport">' +
          n +
          t.outerHTML +
          "</body></html>"),
        !1
      );
    }),
      (this.bosaAddCurrentProtocol = function(e) {
        return "//" != e.slice(0, 2)
          ? e
          : window.location.href.split("/")[0] + e;
      }),
      (this.bosaBuildReport = function(e, t, n) {
        for (var i = null, a = 0, r = 0, o = 0, s = 0; s < t.length; s++) {
          var l = !1;
          switch (t[s].type) {
            case HTMLCS.ERROR:
              !1 === A.show.error ? (l = !0) : a++;
              break;
            case HTMLCS.WARNING:
              !1 === A.show.warning ? (l = !0) : r++;
              break;
            case HTMLCS.NOTICE:
              !1 === A.show.notice ? (l = !0) : o++;
          }
          !0 === l && (t.splice(s, 1), s--);
        }
        var u = z.createElement("ul"),
          d = z.createElement("li"),
          _ = z.createElement("li"),
          c = z.createElement("li"),
          p = z.createElement("li");
        !1 === A.show.error
          ? (d.innerHTML = "Ignoring Errors")
          : (d.innerHTML = a + " Errors"),
          !1 === A.show.warning
            ? (_.innerHTML = "Ignoring Warnings")
            : (_.innerHTML = r + " Warnings"),
          !1 === A.show.notice
            ? (c.innerHTML = "Ignoring Notices")
            : (c.innerHTML = o + " Notices"),
          HTMLCS.getBosaOption("skipIframes")
            ? (p.innerHTML = "Iframes are not checked")
            : (p.innerHTML = "Iframes are also checked"),
          u.appendChild(d),
          u.appendChild(_),
          u.appendChild(c),
          u.appendChild(p),
          ((i = z.createElement("div")).id = G + "bosareport-wrapper");
        var m = z.createElement("div");
        m.className = G + "bosareport-outer-wrapper";
        var g = z.createElement("div");
        (g.id = G + "bosareport-issues-detail-wrapper"),
          (g.className = G + "bosareport-inner-wrapper");
        var h = T(t);
        return (
          g.appendChild(u),
          g.appendChild(h),
          m.appendChild(g),
          i.appendChild(m),
          i
        );
      });
    var C = function(a, r) {
        var o = z.createElement("div");
        o.className = G + "summary-detail";
        var e = z.createElement("div");
        e.className = G + "summary-left";
        var t = z.createElement("div");
        t.className = G + "summary-right";
        var n = z.createElement("ol");
        n.className = G + "lineage";
        var i = z.createElement("li");
        i.className = G + "lineage-item";
        var s = z.createElement("a");
        (s.className = G + "lineage-link"), (s.href = "javascript:");
        var l = z.createElement("span");
        (l.innerHTML = _global.HTMLCS.getTranslation("auditor_home")),
          s.appendChild(l),
          (s.onmousedown = function() {
            E.run(k, L, A);
          });
        var u = z.createElement("li");
        u.className = G + "lineage-item";
        var d = z.createElement("a");
        (d.className = G + "lineage-link"),
          (d.href = "javascript:"),
          (d.innerHTML = _global.HTMLCS.getTranslation("auditor_report")),
          d.setAttribute(
            "title",
            _global.HTMLCS.getTranslation("auditor_back_to_report")
          ),
          (d.onmousedown = function() {
            var e = z.querySelectorAll(".HTMLCS-inner-wrapper")[0];
            (e.style.marginLeft = "0px"),
              (e.style.maxHeight = null),
              (o.style.display = "none"),
              (z.querySelectorAll(".HTMLCS-summary")[0].style.display =
                "block");
          });
        var _ = z.createElement("li");
        (_.className = G + "lineage-item"),
          (_.innerHTML =
            _global.HTMLCS.getTranslation("auditor_issue") +
            " " +
            a +
            " " +
            _global.HTMLCS.getTranslation("auditor_of") +
            " " +
            r),
          i.appendChild(s),
          u.appendChild(d),
          n.appendChild(i),
          n.appendChild(u),
          n.appendChild(_),
          e.appendChild(n);
        var c = z.createElement("div");
        c.className = G + "button-group";
        var p = x(
            G + "button-previous-issue",
            "previous",
            _global.HTMLCS.getTranslation("auditor_previous_issue"),
            function(e) {
              var t = Number(a) - 1;
              if (1 <= t) {
                g(t - 1), (wrapper = o.parentNode);
                var n = C(t, r);
                wrapper.replaceChild(n, o), (n.style.display = "block");
                var i = z.querySelectorAll(".HTMLCS-issue-detail-list")[0];
                (i.firstChild.style.marginLeft =
                  parseInt(i.firstChild.style.marginLeft, 10) + 300 + "px"),
                  h(t - 1);
              }
            }
          ),
          m = x(
            G + "button-next-issue",
            "next",
            _global.HTMLCS.getTranslation("auditor_next_issue"),
            function(e) {
              var t = Number(a) + 1;
              if (t <= w.length) {
                g(t - 1), (wrapper = o.parentNode);
                var n = C(t, r);
                wrapper.replaceChild(n, o), (n.style.display = "block");
                var i = z.querySelectorAll(".HTMLCS-issue-detail-list")[0];
                (i.firstChild.style.marginLeft =
                  parseInt(i.firstChild.style.marginLeft, 10) - 300 + "px"),
                  h(t - 1);
              }
            }
          );
        return (
          1 === a && (p.className += " disabled"),
          a === r && (m.className += " disabled"),
          c.appendChild(p),
          c.appendChild(m),
          t.appendChild(c),
          o.appendChild(e),
          o.appendChild(t),
          o
        );
      },
      T = function(e) {
        var t = 300 * e.length,
          n = z.createElement("div");
        (n.id = G + "issues-detail"),
          (n.className = G + "details"),
          n.setAttribute("style", "width: " + t + "px");
        var i = z.createElement("ol");
        (i.className = G + "issue-detail-list"),
          i.setAttribute("style", "margin-left: 0");
        for (var a = 0; a < e.length; a++) {
          var r = y(a, e[a]);
          i.appendChild(r);
        }
        return n.appendChild(i), n;
      },
      H = function(e, t) {
        var n = "",
          i = "";
        switch (t.type) {
          case HTMLCS.ERROR:
            i = "Error";
            break;
          case HTMLCS.WARNING:
            i = "Warning";
            break;
          case HTMLCS.NOTICE:
            i = "Notice";
        }
        var a = i.toLowerCase(),
          r = t.msg;
        115 < r.length && (r = r.substr(0, 115) + "..."),
          ((n = z.createElement("li")).id = G + "msg-" + e);
        var o = z.createElement("span");
        (o.className = G + "issue-type " + G + a),
          o.setAttribute("title", i),
          n.appendChild(o);
        var s = z.createElement("span");
        return (
          (s.className = G + "issue-title"),
          (s.innerHTML = r),
          n.appendChild(s),
          (n.onclick = function() {
            var e = this.id.replace(new RegExp(G + "msg-"), "");
            g(e);
            var t = z.querySelectorAll(".HTMLCS-issue-detail-list")[0];
            (t.className += " " + G + "transition-disabled"),
              (t.firstChild.style.marginLeft = -300 * e + "px"),
              h(e),
              setTimeout(function() {
                t.className = t.className.replace(
                  new RegExp(" " + G + "transition-disabled"),
                  ""
                );
              }, 500);
            var n = z.querySelectorAll(".HTMLCS-inner-wrapper")[0];
            (n.style.marginLeft = "-300px"),
              (n.style.maxHeight = "15em"),
              (summary = z.querySelectorAll(".HTMLCS-summary-detail")[0]);
            var i = C(parseInt(e) + 1, w.length);
            summary.parentNode.replaceChild(i, summary),
              (i.style.display = "block"),
              (z.querySelectorAll(".HTMLCS-summary")[0].style.display = "none");
          }),
          n
        );
      },
      g = function(e) {
        for (
          var t = z
              .querySelectorAll(".HTMLCS-issue-detail-list")[0]
              .getElementsByTagName("li"),
            n = 0;
          n < t.length;
          n++
        )
          t[n].className = t[n].className.replace(
            new RegExp(" " + G + "current"),
            ""
          );
        (z.getElementById("HTMLCS-msg-detail-" + e).className +=
          " " + G + "current"),
          A.showIssueCallback && A.showIssueCallback.call(this, e);
      },
      y = function(e, t, n) {
        void 0 === n && (n = k);
        var i = "";
        switch (t.type) {
          case HTMLCS.ERROR:
            i = "Error";
            break;
          case HTMLCS.WARNING:
            i = "Warning";
            break;
          case HTMLCS.NOTICE:
            i = "Notice";
        }
        var a = G + i.toLowerCase(),
          r = HTMLCS.util.getElementWindow(z)["HTMLCS_" + n],
          o = [];
        (r = N["HTMLCS_" + n]).getMsgInfo && (o = r.getMsgInfo(t.code));
        var s = z.createElement("li");
        s.id = G + "msg-detail-" + e;
        var l = z.createElement("div");
        l.className = G + "issue-details";
        var u = z.createElement("span");
        (u.className = G + "issue-type " + a), u.setAttribute("title", i);
        var d = z.createElement("div");
        (d.className = G + "issue-title"), (d.innerHTML = t.msg);
        var _ = z.createElement("div");
        _.className = G + "issue-wcag-ref";
        for (var c = "", p = 0; p < o.length; p++)
          c += "<em>" + o[p][0] + ":</em> " + o[p][1] + "<br/>";
        if (
          ((_.innerHTML = c),
          l.appendChild(u),
          l.appendChild(d),
          l.appendChild(_),
          s.appendChild(l),
          !1 === R.isPointable(t.element))
        ) {
          ((h = z.createElement("div")).className = G + "issue-source"),
            s.appendChild(h),
            ((w = z.createElement("div")).className =
              G + "issue-source-inner-u2p");
          var m = _global.HTMLCS.getTranslation("auditor_unable_to_point");
          if ("#document" === t.element.nodeName)
            m = _global.HTMLCS.getTranslation(
              "auditor_applies_entire_document"
            );
          else if (null === t.element.ownerDocument)
            m = _global.HTMLCS.getTranslation(
              "auditor_unable_to_point_removed"
            );
          else {
            var g = t.element.ownerDocument.getElementsByTagName("body")[0];
            !1 === HTMLCS.util.isInDocument(t.element)
              ? (m += _global.HTMLCS.getTranslation(
                  "auditor_unable_to_point_entire"
                ))
              : !1 === HTMLCS.util.contains(g, t.element)
              ? (m = _global.HTMLCS.getTranslation(
                  "auditor_unable_to_point_outside"
                ))
              : (m += _global.HTMLCS.getTranslation(
                  "auditor_unable_to_point_outside"
                ));
          }
          void 0 !== w.textContent ? (w.textContent = m) : (w.innerText = m),
            h.appendChild(w);
        }
        if (A.customIssueSource) {
          ((h = z.createElement("div")).className = G + "issue-source"),
            s.appendChild(h),
            A.customIssueSource.call(this, e, t, n, h, l);
        } else {
          var h;
          (h = z.createElement("div")).className = G + "issue-source";
          var b = z.createElement("div");
          b.className = G + "issue-source-header";
          var f = z.createElement("strong");
          f.innerHTML = _global.HTMLCS.getTranslation("auditor_code_snippet");
          var C = x(
            G + "button-point-to-element-" + e,
            "pointer",
            _global.HTMLCS.getTranslation("auditor_point_to_element"),
            function() {
              E.pointToElement(t.element);
            }
          );
          if (
            (b.appendChild(f),
            b.appendChild(C),
            h.appendChild(b),
            t.element.outerHTML)
          ) {
            var T = "",
              H = "";
            if (31 < t.element.innerHTML.length)
              var y = t.element.outerHTML.replace(
                t.element.innerHTML,
                t.element.innerHTML.substr(0, 31) + "..."
              );
            else y = t.element.outerHTML;
            for (
              var S = t.element.previousSibling;
              T.length <= 31 && null !== S;

            )
              1 === S.nodeType
                ? (T = S.outerHTML)
                : 3 === S.nodeType &&
                  (T =
                    void 0 !== S.textContent
                      ? S.textContent + T
                      : S.nodeValue + T),
                31 < T.length && (T = "..." + T.substr(T.length - 31)),
                (S = S.previousSibling);
            for (var M = t.element.nextSibling; H.length <= 31 && null !== M; )
              1 === M.nodeType
                ? (H += M.outerHTML)
                : 3 === M.nodeType &&
                  (void 0 !== M.textContent
                    ? (H += M.textContent)
                    : (H += M.nodeValue)),
                31 < H.length && (H = H.substr(0, 31) + "..."),
                (M = M.nextSibling);
            (w = z.createElement("div")).className = G + "issue-source-inner";
            var L = z.createElement("strong");
            void 0 !== L.textContent ? (L.textContent = y) : (L.innerText = y),
              w.appendChild(z.createTextNode(T)),
              w.appendChild(L),
              w.appendChild(z.createTextNode(H)),
              h.appendChild(w);
          } else if ("#document" === t.element.nodeName);
          else {
            var w;
            (w = z.createElement("div")).className =
              G + "issue-source-not-supported";
            var v = _global.HTMLCS.getTranslation(
              "auditor_unsupported_browser"
            );
            w.appendChild(z.createTextNode(v)), h.appendChild(w);
          }
          s.appendChild(h);
        }
        return s;
      },
      h = function(e) {
        var t = w[Number(e)];
        if (t.element) {
          var n = z.getElementById(G + "button-point-to-element-" + e);
          if (
            ((R.container =
              E.pointerContainer || z.getElementById("HTMLCS-wrapper")),
            !1 === R.isPointable(t.element))
          ) {
            var i = R.getPointer(t.element);
            R.pointer && (i.className += " HTMLCS-pointer-hidden"),
              n && (n.className += " disabled");
          } else
            n && (n.className = n.className.replace(" disabled", "")),
              R.pointTo(t.element);
        }
      },
      p = function(e, t) {
        if (0 !== e.length) {
          var n = e.shift();
          HTMLCS.loadStandard(n, function() {
            p(e, t);
          });
        } else t.call(this);
      };
    (this.setOption = function(e, t) {
      A[e] = t;
    }),
      (this.getIssue = function(e) {
        return w[e];
      }),
      (this.countIssues = function(e) {
        for (
          var t = { error: 0, warning: 0, notice: 0 }, n = 0;
          n < e.length;
          n++
        )
          switch (e[n].type) {
            case HTMLCS.ERROR:
              t.error++;
              break;
            case HTMLCS.WARNING:
              t.warning++;
              break;
            case HTMLCS.NOTICE:
              t.notice++;
          }
        return t;
      }),
      (this.build = function(e, t, n) {
        var i = null;
        if (z) i = z.getElementById(G + "wrapper");
        for (var a = 0, r = 0, o = 0, s = 0; s < t.length; s++) {
          var l = !1;
          switch (t[s].type) {
            case HTMLCS.ERROR:
              !1 === A.show.error ? (l = !0) : a++;
              break;
            case HTMLCS.WARNING:
              !1 === A.show.warning ? (l = !0) : r++;
              break;
            case HTMLCS.NOTICE:
              !1 === A.show.notice ? (l = !0) : o++;
          }
          !0 === l && (t.splice(s, 1), s--);
        }
        w = t;
        for (s = 0; s < t.length; s++)
          s % 5 == 0 &&
            ('<ol class="HTMLCS-issue-list"',
            0 === s && 'style="margin-left: 0em"',
            ">"),
            H(s, t[s]),
            (s % 5 != 4 && s !== t.length - 1) || "</ol>",
            y(s, t[s], e);
        if (
          (((i = z.createElement("div")).id = G + "wrapper"),
          (i.className = "showing-issue-list"),
          !0 !== A.noHeader)
        ) {
          var u = f(e, i);
          i.appendChild(u);
        }
        var d = (function(e, t, n) {
            var i = z.createElement("div");
            i.className = G + "summary";
            var a = z.createElement("div");
            (a.className = G + "summary-left"), i.appendChild(a);
            var r = z.createElement("div");
            (r.className = G + "summary-right"), i.appendChild(r);
            var o = [];
            if (0 < e) {
              var s = _global.HTMLCS.getTranslation("auditor_errors");
              1 === e && (s = _global.HTMLCS.getTranslation("auditor_error")),
                o.push("<strong>" + e + "</strong> " + s);
            }
            0 < t &&
              ((s = _global.HTMLCS.getTranslation("auditor_warnings")),
              1 === t && (s = _global.HTMLCS.getTranslation("auditor_warning")),
              o.push("<strong>" + t + "</strong> " + s));
            0 < n &&
              ((s = _global.HTMLCS.getTranslation("auditor_notices")),
              1 === n && (s = _global.HTMLCS.getTranslation("auditor_notice")),
              o.push("<strong>" + n + "</strong> " + s));
            var l = z.createElement("ol");
            l.className = G + "lineage";
            var u = z.createElement("li");
            u.className = G + "lineage-item";
            var d = z.createElement("a");
            (d.className = G + "lineage-link"), (d.href = "javascript:");
            var _ = z.createElement("span");
            (_.innerHTML = "Home"),
              d.appendChild(_),
              (d.onmousedown = function() {
                E.run(k, L, A);
              });
            var c = z.createElement("li");
            return (
              (c.className = G + "lineage-item"),
              (c.innerHTML = o.join(
                ', &#160;<span class="HTMLCS-divider"></span>'
              )),
              (c.innerHTML +=
                ' (<a class="export" href="#" onclick="HTMLCSAuditor.bosaExportReport();">Export</a>)'),
              u.appendChild(d),
              l.appendChild(u),
              l.appendChild(c),
              a.appendChild(l),
              r.appendChild(z.createTextNode(String.fromCharCode(160))),
              i
            );
          })(a, r, o),
          _ = C(1, t.length);
        ((m = z.createElement("div")).id = G + "issues-wrapper"),
          (m.className = G + "inner-wrapper");
        var c = (function(e) {
          var t = 300 * Math.ceil(e.length / 5),
            n = z.createElement("div");
          (n.id = G + "issues"),
            (n.className = G + "details"),
            n.setAttribute("style", "width: " + t + "px"),
            ((a = z.createElement("ol")).className = G + "issue-list"),
            a.setAttribute("style", "margin-left: 0");
          for (var i = 0; i < e.length; i++) {
            var a;
            0 < i &&
              i % 5 == 0 &&
              (n.appendChild(a),
              ((a = z.createElement("ol")).className = G + "issue-list"));
            var r = H(i, e[i]);
            a.appendChild(r);
          }
          return n.appendChild(a), n;
        })(t);
        m.appendChild(c);
        var p = (function(e, t) {
          var n = z.createElement("div");
          n.className = G + "navigation";
          var i = z.createElement("span");
          (i.className = G + "nav-button " + G + "previous"),
            (i.innerHTML = String.fromCharCode(160)),
            1 === e && (i.className += " " + G + "disabled"),
            n.appendChild(i);
          var a = z.createElement("span");
          (a.className = G + "page-number"),
            (a.innerHTML =
              _global.HTMLCS.getTranslation("auditor_page") +
              " " +
              e +
              " " +
              _global.HTMLCS.getTranslation("auditor_of") +
              " " +
              t),
            n.appendChild(a);
          var r = z.createElement("span");
          return (
            (r.className = G + "nav-button " + G + "next"),
            (r.innerHTML = String.fromCharCode(160)),
            e === t && (r.className += " " + G + "disabled"),
            n.appendChild(r),
            (i.onclick = function() {
              1 < b && 1 == --b && (i.className += " " + G + "disabled"),
                1 < t &&
                  (r.className = r.className.replace(
                    new RegExp(" " + G + "disabled"),
                    ""
                  )),
                (a.innerHTML = ""),
                a.appendChild(
                  document.createTextNode(
                    _global.HTMLCS.getTranslation("auditor_page") +
                      " " +
                      b +
                      " " +
                      _global.HTMLCS.getTranslation("auditor_of") +
                      " " +
                      t
                  )
                ),
                (z.querySelectorAll(".HTMLCS-issue-list")[0].style.marginLeft =
                  -300 * (b - 1) + "px");
            }),
            (r.onclick = function() {
              b < t && ++b === t && (r.className += " " + G + "disabled"),
                1 < t &&
                  (i.className = i.className.replace(
                    new RegExp(" " + G + "disabled"),
                    ""
                  )),
                (a.innerHTML = ""),
                a.appendChild(
                  document.createTextNode(
                    _global.HTMLCS.getTranslation("auditor_page") +
                      " " +
                      b +
                      " " +
                      _global.HTMLCS.getTranslation("auditor_of") +
                      " " +
                      t
                  )
                ),
                (z.querySelectorAll(".HTMLCS-issue-list")[0].style.marginLeft =
                  -300 * (b - 1) + "px");
            }),
            n
          );
        })(1, Math.ceil(t.length / 5));
        m.appendChild(p);
        var m,
          g = z.createElement("div");
        (g.className = G + "outer-wrapper"),
          g.appendChild(m),
          ((m = z.createElement("div")).id = G + "issues-detail-wrapper"),
          (m.className = G + "inner-wrapper");
        var h = T(t);
        return (
          m.appendChild(h),
          g.appendChild(m),
          i.appendChild(d),
          i.appendChild(_),
          i.appendChild(g),
          i
        );
      }),
      (this.buildSummaryPage = function() {
        var e = z.createElement("div");
        if (
          ((e.id = G + "wrapper"),
          (e.className = "showing-settings"),
          !0 !== A.noHeader)
        ) {
          var t = f(k, e);
          e.appendChild(t);
        }
        var n = (function() {
          var e = z.createElement("div");
          e.className = G + "settings";
          var t = z.createElement("div");
          t.id = G + "settings-use-standard";
          var n = z.createElement("label");
          (n.innerHTML =
            _global.HTMLCS.getTranslation("auditor_standards") + ":"),
            n.setAttribute("for", G + "settings-use-standard-select");
          var i = z.createElement("select");
          (i.id = G + "settings-use-standard-select"), (i.innerHTML = "");
          for (
            var a = HTMLCSAuditor.getStandardList(), r = 0;
            r < a.length;
            r++
          ) {
            var o = a[r],
              s = z.createElement("option");
            (s.value = o),
              (s.innerHTML = _global["HTMLCS_" + o].name),
              o === k && (s.selected = !0),
              i.appendChild(s),
              (i.onchange = function() {
                (k = this.options[this.selectedIndex].value), E.run(k, L, A);
              });
          }
          var l = z.createElement("div");
          l.id = G + "settings-issue-count";
          var u = z.createElement("div");
          (u.id = G + "settings-issue-count-help"),
            (u.innerHTML = _global.HTMLCS.getTranslation(
              "auditor_select_types"
            ));
          var d = z.createElement("div");
          d.id = G + "settings-advanced";
          var _ = z.createElement("label");
          (_.innerHTML = "Skip iframes"),
            _.setAttribute("for", G + "skip-iframes");
          var c = HTMLCS.getBosaOption("skipIframes"),
            p = v(G + "skip-iframes", "Toggle iframe checking", c, !1, function(
              e
            ) {
              HTMLCS.setBosaOption("skipIframes", e.checked), E.run(k, L, A);
            });
          d.appendChild(_), d.appendChild(p);
          var m = z.createElement("div");
          (m.id = G + "settings-view-report"),
            (m.innerHTML = _global.HTMLCS.getTranslation(
              "auditor_view_report"
            )),
            (m.onclick = function() {
              if (!1 === /disabled/.test(this.className)) {
                A.show = {
                  error: z.getElementById(G + "include-error").checked,
                  warning: z.getElementById(G + "include-warning").checked,
                  notice: z.getElementById(G + "include-notice").checked
                };
                var e = z.getElementById(G + "wrapper"),
                  t = E.build(k, w, A);
                A.parentElement
                  ? A.parentElement.replaceChild(t, e)
                  : ((t.style.left = e.style.left),
                    (t.style.top = e.style.top),
                    z.body.replaceChild(t, e)),
                  A.listUpdateCallback && A.listUpdateCallback.call(this, w);
              }
            });
          z.getElementById(G + "wrapper");
          var g = E.countIssues(w);
          for (var h in (void 0 === A.show &&
            0 < w.length &&
            ((A.show = { error: !0, warning: !0, notice: !1 }),
            0 === g.error && 0 === g.warning && (A.show.notice = !0)),
          g)) {
            var b = g[h],
              f = z.createElement("div");
            f.className = G + "issue-tile " + G + h.toLowerCase();
            var C = null,
              T = z.createElement("div");
            (T.className = "HTMLCS-tile-text"),
              "error" == h &&
                ((C = _global.HTMLCS.getTranslation("auditor_error")),
                1 !== b &&
                  (C = _global.HTMLCS.getTranslation("auditor_errors"))),
              "warning" == h &&
                ((C = _global.HTMLCS.getTranslation("auditor_warning")),
                1 !== b &&
                  (C = _global.HTMLCS.getTranslation("auditor_warnings"))),
              "notice" == h &&
                ((C = _global.HTMLCS.getTranslation("auditor_notice")),
                1 !== b &&
                  (C = _global.HTMLCS.getTranslation("auditor_notices")));
            var H = "<strong>" + b + "</strong> " + C;
            if (((T.innerHTML = H), void 0 === A.show))
              var y = !1,
                S = !0;
            else (y = A.show[h]), (S = !1), 0 === b && (S = !(y = !1));
            var M = v(
              G + "include-" + h,
              "Toggle display of " + h + " messages",
              y,
              S,
              function(e) {
                var t = !1;
                !1 === z.getElementById(G + "include-error").disabled &&
                  ((A.show.error = z.getElementById(
                    G + "include-error"
                  ).checked),
                  (t = t || A.show.error)),
                  !1 === z.getElementById(G + "include-warning").disabled &&
                    ((A.show.warning = z.getElementById(
                      G + "include-warning"
                    ).checked),
                    (t = t || A.show.warning)),
                  !1 === z.getElementById(G + "include-notice").disabled &&
                    ((A.show.notice = z.getElementById(
                      G + "include-notice"
                    ).checked),
                    (t = t || A.show.notice)),
                  !0 === t
                    ? (m.className = m.className.replace(/ disabled/g, ""))
                    : (m.className += " disabled");
              }
            );
            f.appendChild(T), f.appendChild(M), l.appendChild(f);
          }
          void 0 !== A.show
            ? !1 === (A.show.error || A.show.warning || A.show.notice) &&
              (m.className += " disabled")
            : (m.className += " disabled");
          return (
            t.appendChild(n),
            t.appendChild(i),
            e.appendChild(t),
            e.appendChild(l),
            e.appendChild(u),
            e.appendChild(d),
            e.appendChild(m),
            e
          );
        })();
        return e.appendChild(n), e;
      }),
      (this.changeScreen = function(e) {
        var t = z.getElementById(G + "wrapper");
        (t.className = t.className.replace(new RegExp("showing-" + c), "")),
          (t.className += " showing-" + e),
          (t.className = t.className.replace(/\s+/, " ")),
          (c = e);
      }),
      (this.includeCss = function(e, t) {
        if (!1 !== A.includeCss) {
          void 0 === t && (t = z);
          for (
            var n = t.querySelector("head"),
              i = n.getElementsByTagName("link"),
              a = !1,
              r = 0;
            r < i.length;
            r++
          )
            if (!0 === new RegExp(e + ".css").test(i[r].getAttribute("href"))) {
              a = !0;
              break;
            }
          if (!1 === a) {
            var o = t.createElement("link");
            (o.rel = "stylesheet"),
              (o.type = "text/css"),
              (o.href = A.path + e + ".css"),
              n.appendChild(o);
          }
        }
      }),
      (this.getStandardList = function() {
        var e = /^HTMLCS_[^_]+$/,
          t = [];
        for (i in window)
          if (!0 === e.test(i)) {
            var n = window[i];
            n.sniffs && n.name && t.push(i.substr(7));
          }
        return t;
      }),
      (this.getParentElement = function() {
        var e = null;
        if (A.parentElement) e = A.parentElement;
        else if (0 < N.frames.length) {
          for (var t = -1, n = null, i = 0; i < N.frames.length; i++)
            try {
              if (
                "frame" ===
                  window.frames[i].frameElement.nodeName.toLowerCase() &&
                window.frames[i].document
              ) {
                var a =
                  window.frames[i].innerWidth * window.frames[i].innerHeight;
                t < a && ((t = a), (n = window.frames[i].document.body));
              }
            } catch (e) {}
          e = null === n ? document.body : n;
        } else e = document.body;
        return e;
      }),
      (this.getOwnerDocument = function() {
        var e = this.getParentElement();
        return e.ownerDocument && (e = e.ownerDocument), e;
      }),
      (this.getDocumentLanguage = function() {
        var e = this.getOwnerDocument().getElementsByTagName("html")[0];
        if (e) {
          var t = e.getAttribute("lang");
          if (t) return t;
        }
        return "en";
      }),
      (this.run = function(e, t, a) {
        N = window;
        for (var n = this.getStandardList(), i = [], r = 0; r < n.length; r++)
          _global["HTMLCS_" + n[r]] || i.push(n[r]);
        if (0 < i.length)
          p(i, function() {
            E.run(e, t, a);
          });
        else {
          if (null == t) {
            if (
              ((t = []),
              0 === document.querySelectorAll("frameset").length &&
                t.push(document),
              0 < N.frames.length)
            )
              for (r = 0; r < N.frames.length; r++)
                try {
                  t.push(N.frames[r].document);
                } catch (e) {}
          } else if (t.nodeName) {
            if ("input" === t.nodeName.toLowerCase())
              if (!1 === t.hasAttribute("type")) t = t.value;
              else
                "text" === t.getAttribute("type").toLowerCase() &&
                  (t = t.value);
            else "textarea" === t.nodeName.toLowerCase() && (t = t.value);
          }
          t instanceof Array == !1 && (t = [t]),
            void 0 === a && (a = {}),
            (k = e),
            (L = t),
            (A = a),
            (b = 1),
            (c = ""),
            (w = []);
          var o = this.getParentElement();
          (z = this.getOwnerDocument()),
            A.path || (A.path = "./"),
            a.lang || (A.lang = this.getDocumentLanguage()),
            void 0 === A.includeCss && (A.includeCss = !0),
            void 0 === A.ignoreMsgCodes && (A.ignoreMsgCodes = []),
            this.includeCss("HTMLCS");
          var s = z.getElementById(G + "wrapper"),
            l = !1,
            u = E.buildSummaryPage();
          (u.className += " HTMLCS-processing"),
            s
              ? ((u.style.left = s.style.left),
                (u.style.top = s.style.top),
                o.replaceChild(u, s))
              : (A.openCallback && A.openCallback.call(this),
                (l = !0),
                o.appendChild(u));
          var d = function() {
              for (var e = 0; e < w.length; e++) {
                var t = !1;
                u &&
                  (u === w[e].element
                    ? (t = !0)
                    : w[e].element.documentElement
                    ? (t = !1)
                    : u.contains && !0 === u.contains(w[e].element)
                    ? (t = !0)
                    : u.compareDocumentPosition &&
                      0 < (16 & u.compareDocumentPosition(w[e].element)) &&
                      (t = !0));
                for (var n = 0; n < a.ignoreMsgCodes.length; n++)
                  if (!0 === new RegExp(a.ignoreMsgCodes[n]).test(w[e].code)) {
                    t = !0;
                    break;
                  }
                !0 === t && (w.splice(e, 1), e--);
              }
              if (A.runCallback) {
                var i = A.runCallback.call(this, w, l);
                i instanceof Array == !0 && (w = i);
              }
              setTimeout(function() {
                var e = z.getElementById(G + "wrapper"),
                  t = E.buildSummaryPage();
                (t.style.left = e.style.left),
                  (t.style.top = e.style.top),
                  o.replaceChild(t, e);
              }, 400);
            },
            _ = function(e, t) {
              for (var n = t.shift(); !n; ) {
                if (0 === t.length) return void d();
                n = t.shift();
              }
              HTMLCS.process(
                e,
                n,
                function() {
                  (w = w.concat(HTMLCS.getMessages())),
                    0 === t.length ? d() : _(e, t);
                },
                function() {},
                a.lang
              );
            };
          _(e, L.concat([]));
        }
      }),
      (this.versionCheck = function(e) {
        if (e && null !== e.currentVersion && e.newVersion > e.currentVersion) {
          var t = z.createElement("div");
          (t.id = G + "settings-updated-notification"),
            z.documentElement.querySelector(".HTMLCS-settings").appendChild(t);
          var n =
            "HTML_CodeSniffer has been updated to version " +
            e.newVersion +
            ".";
          (n +=
            ' <a href="http://squizlabs.github.io/HTML_CodeSniffer/patches/' +
            e.newVersion +
            '">View the changelog</a>'),
            (t.innerHTML = n);
        }
      }),
      (this.close = function() {
        if (z) {
          var e = z.getElementById("HTMLCS-wrapper");
          if (e) {
            var t = R.getPointer(e);
            t && t.parentNode && t.parentNode.removeChild(t),
              e.parentNode.removeChild(e),
              A.closeCallback && (w = A.closeCallback.call(this));
          }
        }
      }),
      (this.pointToElement = function(e) {
        (R.container =
          E.pointerContainer || z.getElementById("HTMLCS-wrapper")),
          R.pointTo(e);
      }),
      (this.getCurrentStandard = function() {
        return k;
      });
    var R = {
      pointerDim: {},
      container: null,
      getBoundingRectangle: function(e) {
        if (!e) return null;
        var t = this.getElementCoords(e),
          n = this.getElementDimensions(e);
        return { x1: t.x, y1: t.y, x2: t.x + n.width, y2: t.y + n.height };
      },
      getElementDimensions: function(e) {
        return { width: e.offsetWidth, height: e.offsetHeight };
      },
      getElementCoords: function(e, t) {
        var n = 0,
          i = 0,
          a = HTMLCS.util.getElementWindow(e);
        if (!0 === t) var r = a.top;
        else r = a;
        for (;;) {
          for (
            ;
            (n += e.offsetLeft), (i += e.offsetTop), (e = e.offsetParent);

          );
          if (a === r) break;
          if (
            ((e = a.frameElement),
            (a = a.parent),
            "frame" === e.nodeName.toLowerCase())
          )
            break;
        }
        return { x: n, y: i };
      },
      getWindowDimensions: function(e) {
        var t = HTMLCS.util.getElementWindow(e),
          n = e.ownerDocument,
          i = 0,
          a = 0;
        if (t.innerWidth) {
          (i = t.innerWidth), (a = t.innerHeight);
          var r = this.getScrollbarWidth(e);
          n.documentElement.scrollHeight > a &&
            "number" == typeof r &&
            (i -= r),
            n.body.scrollWidth > i && "number" == typeof r && (a -= r);
        } else
          n.documentElement &&
          (n.documentElement.clientWidth || n.documentElement.clientHeight)
            ? ((i = n.documentElement.clientWidth),
              (a = n.documentElement.clientHeight))
            : n.body &&
              (n.body.clientWidth || n.body.clientHeight) &&
              ((i = n.body.clientWidth), (a = n.body.clientHeight));
        return { width: i, height: a };
      },
      getScrollbarWidth: function(e) {
        if (null !== o) return o;
        doc = e.ownerDocument;
        var t,
          n,
          i = null,
          a = null;
        ((i = doc.createElement("div")).style.position = "absolute"),
          (i.style.top = "-1000px"),
          (i.style.left = "-1000px"),
          (i.style.width = "100px"),
          (i.style.height = "50px"),
          (i.style.overflow = "hidden"),
          ((a = doc.createElement("div")).style.width = "100%"),
          (a.style.height = "200px"),
          i.appendChild(a),
          z.body.appendChild(i),
          (t = a.offsetWidth),
          (i.style.overflow = "auto"),
          (n = a.offsetWidth),
          doc.body.removeChild(doc.body.lastChild);
        var r = t - n;
        return (o = r);
      },
      getScrollCoords: function(e) {
        var t = HTMLCS.util.getElementWindow(e);
        doc = e.ownerDocument;
        var n = 0,
          i = 0;
        return (
          (i = t.pageYOffset
            ? ((n = t.pageXOffset), t.pageYOffset)
            : doc.body && (doc.body.scrollLeft || doc.body.scrollTop)
            ? ((n = doc.body.scrollLeft), doc.body.scrollTop)
            : ((n = doc.documentElement.scrollLeft),
              doc.documentElement.scrollTop)),
          { x: n, y: i }
        );
      },
      isPointable: function(e) {
        if (null === e.ownerDocument) return !1;
        for (var t = e.parentNode; t && t.ownerDocument; ) t = t.parentNode;
        return (
          null !== t &&
          (!0 !== HTMLCS.util.isVisuallyHidden(e) &&
            null !== this.getPointerDirection(e))
        );
      },
      getPointerDirection: function(e) {
        var t = null,
          n = this.getBoundingRectangle(e),
          i = this.getPointer(e),
          a = e.ownerDocument;
        (i.className = i.className.replace("HTMLCS-pointer-hidden", "")),
          (i.className += " HTMLCS-pointer-hidden-block"),
          (this.pointerDim.height = 62),
          (this.pointerDim.width = 62);
        var r = this.getWindowDimensions(e),
          o = (HTMLCS.util.getElementWindow(e),
          Math.max(
            0,
            Math.min(n.y1 - 100, a.documentElement.offsetHeight - r.height)
          ));
        return (
          n.y1 - this.pointerDim.height - 20 > o
            ? (t = "down")
            : n.y2 + this.pointerDim.height < r.height - o
            ? (t = "up")
            : n.x2 + this.pointerDim.width < r.width
            ? (t = "left")
            : 0 < n.x1 - this.pointerDim.width && (t = "right"),
          (i.className = i.className.replace(
            "HTMLCS-pointer-hidden-block",
            ""
          )),
          (i.className += " HTMLCS-pointer-hidden"),
          t
        );
      },
      pointTo: function(e) {
        if (e.ownerDocument) var t = e.ownerDocument;
        else t = e;
        var n = t.getElementById("HTMLCS-pointer");
        if ((n && n.parentNode.removeChild(n), !1 !== this.isPointable(e))) {
          var i = HTMLCS.util.getElementWindow(e).top,
            a = (this.getWindowDimensions(i.document.documentElement),
            this.getPointerDirection(e)),
            r = this.getPointer(e);
          if (
            ((r.className = r.className.replace(
              "HTMLCS-pointer-hidden-block",
              ""
            )),
            null === a)
          )
            r.className += " HTMLCS-pointer-hidden";
          else {
            var o = !1;
            if ("fixed" === HTMLCS.util.style(e).position) o = !0;
            for (var s = e.parentNode; s.ownerDocument; ) {
              if ("fixed" === HTMLCS.util.style(s).position) {
                o = !0;
                break;
              }
              s = s.parentNode;
            }
            if (!0 === o) r.style.position = "fixed";
            else {
              r.style.position = "absolute";
              for (
                var l = this.getElementCoords(e, !0),
                  u = HTMLCS.util.getElementWindow(e),
                  d = Math.max(l.y - 100, 0);
                0 <= d;

              ) {
                if (
                  (u.scrollTo(0, d),
                  (d -= this.getScrollCoords(u.document.documentElement).y),
                  (d = Math.max(d, 0)),
                  u === i)
                )
                  break;
                u = u.parent;
              }
            }
            this.showPointer(e, a);
          }
        }
      },
      getPointer: function(e) {
        try {
          var t = e.ownerDocument;
          HTMLCSAuditor.includeCss("HTMLCS", t);
          var n = "HTMLCS",
            i = t.getElementById(n + "-pointer");
          i ||
            (((i = t.createElement("div")).id = n + "-pointer"),
            (i.className = n + "-pointer " + n + "-pointer-hidden"),
            t.body.appendChild(i));
        } catch (e) {}
        return i;
      },
      showPointer: function(e, t) {
        var n = this.getPointer(e);
        this._removeDirectionClasses(n),
          (n.className += " HTMLCS-pointer-" + t),
          (n.className = n.className.replace("HTMLCS-pointer-hidden", ""));
        var i = this.getBoundingRectangle(e),
          a = 0,
          r = 0,
          o = 20;
        switch (t) {
          case "up":
            (o = -o),
              (a = i.y2),
              (r =
                i.x2 - i.x1 < 250
                  ? this.getRectMidPnt(i) - this.pointerDim.width / 2
                  : i.x1);
            break;
          case "down":
          default:
            (a = i.y1 - this.pointerDim.height),
              (r =
                i.x2 - i.x1 < 250
                  ? this.getRectMidPnt(i) - this.pointerDim.width / 2
                  : i.x1);
            break;
          case "left":
            (r = i.x2),
              (a = this.getRectMidPnt(i, !0) - this.pointerDim.height / 2);
            break;
          case "right":
            (o = -o),
              (r = i.x1 - this.pointerDim.width),
              (a = this.getRectMidPnt(i, !0) - this.pointerDim.height / 2);
        }
        var s = this.getScrollCoords(e);
        (n.style.top = a + "px"), (n.style.left = r + "px");
        var l = this.getBoundingRectangle(this.container),
          u = (i = this.getBoundingRectangle(n)).x1 + (i.x2 - i.x1) / 2,
          d = i.y1 + (i.y2 - i.y1) / 2;
        if (
          ("fixed" !== HTMLCS.util.style(n).position && (d -= s.y),
          l.x1 <= u && l.x2 >= u && l.y1 <= d && l.y2 >= d)
        ) {
          var _ = this;
          (this.container.className += " HTMLCS-translucent"),
            setTimeout(function() {
              _.container.className = _.container.className.replace(
                "HTMLCS-translucent",
                ""
              );
            }, 4e3);
        }
        this.bounce(
          n,
          function() {
            setTimeout(function() {
              n.parentNode && n.parentNode.removeChild(n);
            }, 1500);
          },
          t
        );
      },
      bounce: function(e, t, n) {
        var i,
          a = n,
          r = "",
          o = 0;
        switch (n) {
          case "up":
            (a = n + "-op"), (o = 30);
          case "down":
            r = "top";
            break;
          case "left":
            (a = n + "-op"), (o = 30);
          case "right":
            r = "left";
        }
        var s = (i = Number(e.style[r].replace("px", "")) + o),
          l = i - 30,
          u = 0,
          d = setInterval(function() {
            if (a === n) {
              if (
                (s--,
                (e.style[r] = s + "px"),
                s < l && ((a = n + "-op"), 5 === u && 0 !== o))
              )
                return clearInterval(d), void t.call(this);
            } else if ((s++, (e.style[r] = s + "px"), i <= s && ((a = n), 5 === ++u && 0 === o))) return clearInterval(d), void t.call(this);
          }, 10);
      },
      getRectMidPnt: function(e, t) {
        return !0 === t ? e.y1 + (e.y2 - e.y1) / 2 : e.x1 + (e.x2 - e.x1) / 2;
      },
      _removeDirectionClasses: function(e) {
        for (
          var t = ["down", "up", "left", "right"], n = t.length, i = 0;
          i < n;
          i++
        )
          e.className = e.className.replace("HTMLCS-pointer-" + t[i], "");
      }
    };
  }(); // Expose globals.
  return _global;
});
