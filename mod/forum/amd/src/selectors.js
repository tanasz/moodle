// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Common CSS selectors for the forum UI.
 *
 * @module     mod_forum/selectors
 * @package    mod_forum
 * @copyright  2019 Andrew Nicols <andrew@nicols.co.uk>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define([], function() {
    return {
        subscription: {
            toggle: "[data-type='subscription-toggle'][data-action='toggle']",
        },
        post: {
            post: '[data-region="post"]',
            action: '[data-region="post-action"]',
            actionsContainer: '[data-region="post-actions-container"]',
            forumCoreContent: "[data-region-content='forum-post-core']",
            forumContent: "[data-content='forum-post']",
            forumSubject: "[data-region-content='forum-post-core-subject']",
            inpageReplyButton: "button",
            inpageReplyLink: "[data-action='collapsible-link']",
            inpageReplyContent: "[data-content='inpage-reply-content']",
            inpageReplyForm: "form[data-content='inpage-reply-form']",
            inpageSubmitBtn: "[data-action='forum-inpage-submit']",
            inpageSubmitBtnText: "[data-region='submit-text']",
            loadingIconContainer: "[data-region='loading-icon-container']",
            repliesContainer: "[data-region='replies-container']",
            modeSelect: "select[name='mode']"
        },
        lock: {
            toggle: "[data-action='toggle'][data-type='lock-toggle']",
        },
        favourite: {
            toggle: "[data-type='favorite-toggle'][data-action='toggle']",
        },
        pin: {
            toggle: "[data-type='pin-toggle'][data-action='toggle']",
        },
    };
});
