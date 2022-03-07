import {useState} from "react"

function EmojiPicker(): JSX.Element {
    const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] = 
    useState(" -");
    const [emojiValueFromPreviousRender, queueRerenderWithNewFavouriteValue] =
    useState("-");

    const handleEmojiA = () => {
        queueRerenderWithNewEmojiValue("⏰");
        queueRerenderWithNewFavouriteValue(emojiValueFromCurrentRender)
    };

    const handleEmojiB = () => {
        queueRerenderWithNewEmojiValue("🛌");
        queueRerenderWithNewFavouriteValue(emojiValueFromCurrentRender);
    };

    const handleEmojiC = () => {
        queueRerenderWithNewEmojiValue("🍳");
        queueRerenderWithNewFavouriteValue(emojiValueFromCurrentRender);
    };

    const handleEmojiD = () => {
        queueRerenderWithNewEmojiValue("😋");
        queueRerenderWithNewFavouriteValue(emojiValueFromCurrentRender);
    };

    const handleEmojiE = () => {
        queueRerenderWithNewEmojiValue("🍽️")
        queueRerenderWithNewFavouriteValue(emojiValueFromCurrentRender);
    };


    return (
        <>
        <h1> Emoji Picker</h1>
        <p>Your last two emojis are:{emojiValueFromPreviousRender}| {emojiValueFromCurrentRender}</p>
        <hr/>
        <p>Please select the next emoji:{emojiValueFromCurrentRender}</p>
        <button onClick={handleEmojiA} >⏰</button>
        <button onClick={handleEmojiB}>🛌</button>
        <button onClick={handleEmojiC}>🍳</button>
        <button onClick={handleEmojiD}>😋</button>
        <button onClick={handleEmojiE}>🍽️</button>
        </>
    )
}

export default EmojiPicker;