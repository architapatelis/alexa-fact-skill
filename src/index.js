'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Bee Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "There are three kinds of honeybees in a hive: Queen, Worker and Drone.",
    "The queen honeybee will lay around 1,500 eggs per day.",
    "The queen honeybee can live up to five years.",
    "Honeybees have two stomachs. One stomach for eating. And the other special stomach is for storing nectar collected from flowers or water, so that they can carry it back to their hive.",
    "The worker honeybees are all female. And they do all the work for the hive.",
    "The male honeybees in the hive are called drones. Their job in the hive is to find a queen to mate with.",
    "Honey is 80 percent sugars and 20 percent water.",
    "If a worker honeybee uses her stinger, she will die.",
    "Honeybees are classified as insects and, they have six legs.",
    "Honey has natural preservatives and bacteria can't grow in it.",
    "A honeybee can fly 24 km in an hour at a speed of 15 mph.",
    "A honeybee's wings beat 200 times per second or 12,000 beats per minute.",
    "Honeybees have straw-like tongues called a proboscis, so they can suck up liquids.",
    "A honeybee must collect nectar from about 2 million flowers to make 1 pound of honey.",
    "A honeycomb cell has six sides.",
    "Worker honeybees process the nectar in their stomach by adding enzymes to it, they regurgitate this into the honeycomb cells. Then they fan with their wings to remove excess moisture.",
    "It requires 556 worker honeybees to gather a pound of honey.",
    "Honeybees fly more than once around the world to gather a pound of honey.",
    "The average worker honeybee makes about 1/12th of a teaspoon of honey in her lifetime.",
    "The average worker honeybee lives for just five to six weeks.",
    "Beeswax is produced by the honeybees. Honeybees have special glands on their stomach that secrete the wax into little wax pockets on their stomach. The honeybee takes the wax and chews it with her mandibles and shapes it to make honeycomb.",
    "Propolis is a sticky substance that honeybees collect from the buds of trees. Honeybees use propolis to weather proof their hive against drafts or in spots where rain might leak in.",
    "Royal Jelly is a milky substance produced in a special gland in the worker honeybee's head. Her entire life the queen is fed Royal Jelly by the workers.",
    "Honeybees have five eyes, 3 small ones on top of the head and two big ones in front.",
    "Honeybees never sleep.",
    "A single honeybee will visit 50-100 flowers on a single trip out of the hive.",
    "A typical beehive can make up to 400 pounds of honey per year.",
    "Only female honeybees can sting. That's because the stinger is a modified version of their egg-laying organ, the ovipositor.",
    "No male bee of any species can sting, even honeybees and bumblebees.",
    "A populous colony may contain 40,000 to 60,000 bees during the late spring or early summer."


];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
