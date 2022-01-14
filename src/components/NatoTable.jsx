import React from 'react';

export default function NatoTable({charArray}) {

    const nato = {
        'A': 'Upper Case Alpha', 'B': 'Upper Case Bravo', 'C': 'Upper Case Charlie',
        'D': 'Upper Case Delta', 'E': 'Upper Case Echo', 'F': 'Upper Case Foxtrot',
        'G': 'Upper Case Golf', 'H': 'Upper Case Hotel', 'I': 'Upper Case India',
        'J': 'Upper Case Juliett', 'K': 'Upper Case Kilo', 'L': 'Upper Case Lima',
        'M': 'Upper Case Mike', 'N': 'Upper Case November', 'O': 'Upper Case Oscar',
        'P': 'Upper Case Papa', 'Q': 'Upper Case Quebec', 'R': 'Upper Case Romeo',
        'S': 'Upper Case Sierra', 'T': 'Upper Case Tango', 'U': 'Upper Case Uniform',
        'V': 'Upper Case Victor', 'W': 'Upper Case Whiskey', 'X': 'Upper Case X-ray',
        'Y': 'Upper Case Yankee', 'Z': 'Upper Case Zulu',
        'a': 'Lower Case Alpha', 'b': 'Lower Case Bravo', 'c': 'Lower Case Charlie',
        'd': 'Lower Case Delta', 'e': 'Lower Case Echo', 'f': 'Lower Case Foxtrot',
        'g': 'Lower Case Golf', 'h': 'Lower Case Hotel', 'i': 'Lower Case India',
        'j': 'Lower Case Juliett', 'k': 'Lower Case Kilo', 'l': 'Lower Case Lima',
        'm': 'Lower Case Mike', 'n': 'Lower Case November', 'o': 'Lower Case Oscar',
        'p': 'Lower Case Papa', 'q': 'Lower Case Quebec', 'r': 'Lower Case Romeo',
        's': 'Lower Case Sierra', 't': 'Lower Case Tango', 'u': 'Lower Case Uniform',
        'v': 'Lower Case Victor', 'w': 'Lower Case Whiskey', 'x': 'Lower Case X-ray',
        'y': 'Lower Case Yankee', 'z': 'Lower Case Zulu', "!": 'Exclamation Point (SHIFT + 1)',
        "@": "At Symbol (SHIFT + 2)", "#": "Pound Sign (SHIFT + 3)", "$": "Dollar Sign (SHIFT + 4)",
        "%": "Percent Symbol (SHIFT + 5)", "^": "Upwards Caret (SHIFT + 6)", "&": "Ampersand (SHIFT + 7)",
        "*": "Asterisk (SHIFT + 8)", "(": "Left Parenthesis (SHIFT + 9)", ")": "Right Parenthesis (SHIFT + 0)", ":": "Colon (SHIFT + SEMICOLON)", "-": "Minus", "+": "Plus (SHIFT + =)", "=": "Equals Sign", ",": "Comma", "<": "Left Caret (SHIFT + COMMA", ".": "Period", ">": "Right Caret (SHIFT + PERIOD", "?": "Question Mark (SHIFT + FORWARD SLASH", "/": "Forward Slash (Left of Shift Key)", ";": "Semi Colon (SHIFT + COLON)",
        "1": "One", "2": "Two", "3": "Three", "4": "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine", "0": "Zero",
    }

    function toNato(char) {
        return nato[char];
    }

    return (
        <div>
            <table style={{ marginLeft: "90px" , paddingBottom:"100px"}}>
                <th style={{ paddingLeft: "25px", paddingRight: "25px" }}>Index</th>
                <th style={{ paddingLeft: "25px", paddingRight: "25px" }}>Letter</th>
                <th style={{ paddingLeft: "25px", paddingRight: "0px" }}>NATO</th>
                {charArray.map((char, index) => (
                    <tr>
                        <td style={{ paddingLeft: "25px", paddingRight: "25px", paddingTop:"15px", }}>{index + 1}</td>
                        <td style={{ paddingTop:"15px", paddingLeft: "25px", paddingRight: "25px" }}>{char}</td>
                        <td style={{ paddingTop:"15px",paddingLeft: "25px", paddingRight: "25px" }} >{toNato(char)}</td>
                    </tr>
                ))}
            </table>
            {" "}
        </div>
    );
}