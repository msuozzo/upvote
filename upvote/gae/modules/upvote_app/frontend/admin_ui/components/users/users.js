// Copyright 2017 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('upvote.admin.users.module');

goog.require('upvote.admin.users.UserQueryResource');
goog.require('upvote.admin.users.UserResource');
goog.require('upvote.admin.users.prettifyRole');
goog.require('upvote.admin.users.uvUserCard');


/** @type {!angular.Module} */
upvote.admin.users.module =
    angular.module('upvote.admin.users', ['ngResource'])
        .factory('userResource', upvote.admin.users.UserResource)
        .factory('userQueryResource', upvote.admin.users.UserQueryResource)
        .directive('uvUserCard', upvote.admin.users.uvUserCard)
        .filter('prettifyRole', () => upvote.admin.users.prettifyRole);
