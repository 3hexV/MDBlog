export namespace languages {
    export let clike: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        }[];
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                punctuation: RegExp;
            };
        };
        keyword: RegExp;
        boolean: RegExp;
        function: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let javascript: any;
    import js = javascript;
    export { js };
    export let abap: {
        comment: RegExp;
        string: RegExp;
        'string-template': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'eol-comment': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        keyword: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        number: RegExp;
        operator: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        'string-operator': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'token-operator': ({
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        } | {
            pattern: RegExp;
            alias: string;
            lookbehind?: undefined;
        })[];
        punctuation: RegExp;
    };
    export let actionscript: any;
    export namespace ada {
        let comment: RegExp;
        let string: RegExp;
        let number: {
            pattern: RegExp;
        }[];
        namespace attribute {
            let pattern: RegExp;
            let alias: string;
        }
        let keyword: RegExp;
        let boolean: RegExp;
        let operator: RegExp;
        let punctuation: RegExp;
        let char: RegExp;
        let variable: RegExp;
    }
    export let al: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        function: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        keyword: RegExp[];
        number: RegExp;
        boolean: RegExp;
        variable: RegExp;
        'class-name': RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let antlr4: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'character-class': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
            inside: {
                range: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
                escape: RegExp;
                punctuation: RegExp;
            };
        };
        action: {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                content: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                punctuation: RegExp;
            };
        };
        command: {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                function: RegExp;
                punctuation: RegExp;
            };
        };
        annotation: {
            pattern: RegExp;
            alias: string;
        };
        label: {
            pattern: RegExp;
            alias: string;
        };
        keyword: RegExp;
        definition: {
            pattern: RegExp;
            alias: string[];
        }[];
        constant: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    import g4 = antlr4;
    export { g4 };
    export let apacheconf: {
        comment: RegExp;
        'directive-inline': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'directive-block': {
            pattern: RegExp;
            inside: {
                'directive-block': {
                    pattern: RegExp;
                    inside: {
                        punctuation: RegExp;
                    };
                    alias: string;
                };
                'directive-block-parameter': {
                    pattern: RegExp;
                    inside: {
                        punctuation: RegExp;
                        string: {
                            pattern: RegExp;
                            inside: {
                                variable: RegExp;
                            };
                        };
                    };
                    alias: string;
                };
                punctuation: RegExp;
            };
            alias: string;
        };
        'directive-flags': {
            pattern: RegExp;
            alias: string;
        };
        string: {
            pattern: RegExp;
            inside: {
                variable: RegExp;
            };
        };
        variable: RegExp;
        regex: RegExp;
    };
    export namespace sql {
        export namespace comment_1 {
            let pattern_1: RegExp;
            export { pattern_1 as pattern };
            export let lookbehind: boolean;
        }
        export { comment_1 as comment };
        let variable_1: (RegExp | {
            pattern: RegExp;
            greedy: boolean;
        })[];
        export { variable_1 as variable };
        export namespace string_1 {
            let pattern_2: RegExp;
            export { pattern_2 as pattern };
            export let greedy: boolean;
            let lookbehind_1: boolean;
            export { lookbehind_1 as lookbehind };
        }
        export { string_1 as string };
        export namespace identifier {
            let pattern_3: RegExp;
            export { pattern_3 as pattern };
            let greedy_1: boolean;
            export { greedy_1 as greedy };
            let lookbehind_2: boolean;
            export { lookbehind_2 as lookbehind };
            export namespace inside {
                let punctuation_1: RegExp;
                export { punctuation_1 as punctuation };
            }
        }
        let _function: RegExp;
        export { _function as function };
        let keyword_1: RegExp;
        export { keyword_1 as keyword };
        let boolean_1: RegExp;
        export { boolean_1 as boolean };
        let number_1: RegExp;
        export { number_1 as number };
        let operator_1: RegExp;
        export { operator_1 as operator };
        let punctuation_2: RegExp;
        export { punctuation_2 as punctuation };
    }
    export let apl: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        number: RegExp;
        statement: RegExp;
        'system-function': {
            pattern: RegExp;
            alias: string;
        };
        constant: RegExp;
        function: RegExp;
        'monadic-operator': {
            pattern: RegExp;
            alias: string;
        };
        'dyadic-operator': {
            pattern: RegExp;
            alias: string;
        };
        assignment: {
            pattern: RegExp;
            alias: string;
        };
        punctuation: RegExp;
        dfn: {
            pattern: RegExp;
            alias: string;
        };
    };
    export let applescript: {
        comment: RegExp[];
        string: RegExp;
        number: RegExp;
        operator: RegExp[];
        keyword: RegExp;
        'class-name': RegExp;
        punctuation: RegExp;
    };
    export namespace aql {
        let comment_2: RegExp;
        export { comment_2 as comment };
        export namespace property {
            let pattern_4: RegExp;
            export { pattern_4 as pattern };
            let lookbehind_3: boolean;
            export { lookbehind_3 as lookbehind };
            let greedy_2: boolean;
            export { greedy_2 as greedy };
        }
        export namespace string_2 {
            let pattern_5: RegExp;
            export { pattern_5 as pattern };
            let greedy_3: boolean;
            export { greedy_3 as greedy };
        }
        export { string_2 as string };
        export namespace identifier_1 {
            let pattern_6: RegExp;
            export { pattern_6 as pattern };
            let greedy_4: boolean;
            export { greedy_4 as greedy };
        }
        export { identifier_1 as identifier };
        let variable_2: RegExp;
        export { variable_2 as variable };
        let keyword_2: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        } | {
            pattern: RegExp;
            lookbehind?: undefined;
        })[];
        export { keyword_2 as keyword };
        let _function_1: RegExp;
        export { _function_1 as function };
        let boolean_2: RegExp;
        export { boolean_2 as boolean };
        export namespace range {
            let pattern_7: RegExp;
            export { pattern_7 as pattern };
            let alias_1: string;
            export { alias_1 as alias };
        }
        let number_2: RegExp[];
        export { number_2 as number };
        let operator_2: RegExp;
        export { operator_2 as operator };
        let punctuation_3: RegExp;
        export { punctuation_3 as punctuation };
    }
    export let c: any;
    export let arduino: any;
    import ino = arduino;
    export { ino };
    export namespace arff {
        let comment_3: RegExp;
        export { comment_3 as comment };
        export namespace string_3 {
            let pattern_8: RegExp;
            export { pattern_8 as pattern };
            let greedy_5: boolean;
            export { greedy_5 as greedy };
        }
        export { string_3 as string };
        let keyword_3: RegExp;
        export { keyword_3 as keyword };
        let number_3: RegExp;
        export { number_3 as number };
        let punctuation_4: RegExp;
        export { punctuation_4 as punctuation };
    }
    export let armasm: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                variable: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
            };
        };
        char: {
            pattern: RegExp;
            greedy: boolean;
        };
        'version-symbol': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        boolean: RegExp;
        directive: {
            pattern: RegExp;
            alias: string;
        };
        instruction: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        variable: RegExp;
        number: RegExp;
        register: {
            pattern: RegExp;
            alias: string;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    export let aspnet: any;
    export let asm6502: {
        comment: RegExp;
        directive: {
            pattern: RegExp;
            alias: string;
        };
        string: RegExp;
        'op-code': {
            pattern: RegExp;
            alias: string;
        };
        'hex-number': {
            pattern: RegExp;
            alias: string;
        };
        'binary-number': {
            pattern: RegExp;
            alias: string;
        };
        'decimal-number': {
            pattern: RegExp;
            alias: string;
        };
        register: {
            pattern: RegExp;
            alias: string;
        };
        punctuation: RegExp;
    };
    export let asmatmel: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        constant: RegExp;
        directive: {
            pattern: RegExp;
            alias: string;
        };
        'r-register': {
            pattern: RegExp;
            alias: string;
        };
        'op-code': {
            pattern: RegExp;
            alias: string;
        };
        'hex-number': {
            pattern: RegExp;
            alias: string;
        };
        'binary-number': {
            pattern: RegExp;
            alias: string;
        };
        'decimal-number': {
            pattern: RegExp;
            alias: string;
        };
        register: {
            pattern: RegExp;
            alias: string;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    export namespace autohotkey {
        let comment_4: ({
            pattern: RegExp;
            lookbehind: boolean;
            greedy?: undefined;
        } | {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        })[];
        export { comment_4 as comment };
        export namespace tag {
            let pattern_9: RegExp;
            export { pattern_9 as pattern };
            let lookbehind_4: boolean;
            export { lookbehind_4 as lookbehind };
        }
        let string_4: RegExp;
        export { string_4 as string };
        let variable_3: RegExp;
        export { variable_3 as variable };
        let number_4: RegExp;
        export { number_4 as number };
        let operator_3: RegExp;
        export { operator_3 as operator };
        let boolean_3: RegExp;
        export { boolean_3 as boolean };
        export namespace command {
            let pattern_10: RegExp;
            export { pattern_10 as pattern };
            let alias_2: string;
            export { alias_2 as alias };
        }
        export let constant: RegExp;
        export let builtin: RegExp;
        export let symbol: RegExp;
        export namespace directive {
            let pattern_11: RegExp;
            export { pattern_11 as pattern };
            let alias_3: string;
            export { alias_3 as alias };
        }
        let keyword_4: RegExp;
        export { keyword_4 as keyword };
        let _function_2: RegExp;
        export { _function_2 as function };
        let punctuation_5: RegExp;
        export { punctuation_5 as punctuation };
    }
    export namespace autoit {
        let comment_5: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { comment_5 as comment };
        export namespace url {
            let pattern_12: RegExp;
            export { pattern_12 as pattern };
            let lookbehind_5: boolean;
            export { lookbehind_5 as lookbehind };
        }
        export namespace string_5 {
            let pattern_13: RegExp;
            export { pattern_13 as pattern };
            let greedy_6: boolean;
            export { greedy_6 as greedy };
            export namespace inside_1 {
                let variable_4: RegExp;
                export { variable_4 as variable };
            }
            export { inside_1 as inside };
        }
        export { string_5 as string };
        export namespace directive_1 {
            let pattern_14: RegExp;
            export { pattern_14 as pattern };
            let lookbehind_6: boolean;
            export { lookbehind_6 as lookbehind };
            let alias_4: string;
            export { alias_4 as alias };
        }
        export { directive_1 as directive };
        let _function_3: RegExp;
        export { _function_3 as function };
        let variable_5: RegExp;
        export { variable_5 as variable };
        let keyword_5: RegExp;
        export { keyword_5 as keyword };
        let number_5: RegExp;
        export { number_5 as number };
        let boolean_4: RegExp;
        export { boolean_4 as boolean };
        let operator_4: RegExp;
        export { operator_4 as operator };
        let punctuation_6: RegExp;
        export { punctuation_6 as punctuation };
    }
    export let avdl: any;
    export namespace awk {
        export namespace hashbang {
            let pattern_15: RegExp;
            export { pattern_15 as pattern };
            let greedy_7: boolean;
            export { greedy_7 as greedy };
            let alias_5: string;
            export { alias_5 as alias };
        }
        export namespace comment_6 {
            let pattern_16: RegExp;
            export { pattern_16 as pattern };
            let greedy_8: boolean;
            export { greedy_8 as greedy };
        }
        export { comment_6 as comment };
        export namespace string_6 {
            let pattern_17: RegExp;
            export { pattern_17 as pattern };
            let lookbehind_7: boolean;
            export { lookbehind_7 as lookbehind };
            let greedy_9: boolean;
            export { greedy_9 as greedy };
        }
        export { string_6 as string };
        export namespace regex {
            let pattern_18: RegExp;
            export { pattern_18 as pattern };
            let lookbehind_8: boolean;
            export { lookbehind_8 as lookbehind };
            let greedy_10: boolean;
            export { greedy_10 as greedy };
        }
        let variable_6: RegExp;
        export { variable_6 as variable };
        let keyword_6: RegExp;
        export { keyword_6 as keyword };
        let _function_4: RegExp;
        export { _function_4 as function };
        let number_6: RegExp;
        export { number_6 as number };
        let operator_5: RegExp;
        export { operator_5 as operator };
        let punctuation_7: RegExp;
        export { punctuation_7 as punctuation };
    }
    import gawk = awk;
    export { gawk };
    export namespace basic {
        export namespace comment_7 {
            let pattern_19: RegExp;
            export { pattern_19 as pattern };
            export namespace inside_2 {
                let keyword_7: RegExp;
                export { keyword_7 as keyword };
            }
            export { inside_2 as inside };
        }
        export { comment_7 as comment };
        export namespace string_7 {
            let pattern_20: RegExp;
            export { pattern_20 as pattern };
            let greedy_11: boolean;
            export { greedy_11 as greedy };
        }
        export { string_7 as string };
        let number_7: RegExp;
        export { number_7 as number };
        let keyword_8: RegExp;
        export { keyword_8 as keyword };
        let _function_5: RegExp;
        export { _function_5 as function };
        let operator_6: RegExp;
        export { operator_6 as operator };
        let punctuation_8: RegExp;
        export { punctuation_8 as punctuation };
    }
    export namespace bbcode {
        export namespace tag_1 {
            let pattern_21: RegExp;
            export { pattern_21 as pattern };
            let inside_3: {
                tag: {
                    pattern: RegExp;
                    inside: {
                        punctuation: RegExp;
                    };
                };
                'attr-value': {
                    pattern: RegExp;
                    inside: {
                        punctuation: (RegExp | {
                            pattern: RegExp;
                            lookbehind: boolean;
                        })[];
                    };
                };
                punctuation: RegExp;
                'attr-name': RegExp;
            };
            export { inside_3 as inside };
        }
        export { tag_1 as tag };
    }
    import shortcode = bbcode;
    export { shortcode };
    export let bicep: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        }[];
        property: ({
            pattern: RegExp;
            lookbehind: boolean;
            greedy?: undefined;
        } | {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        })[];
        string: ({
            pattern: RegExp;
            greedy: boolean;
            lookbehind?: undefined;
        } | {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        })[];
        'interpolated-string': {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            inside: {
                interpolation: {
                    pattern: RegExp;
                    inside: {
                        expression: {
                            pattern: RegExp;
                            lookbehind: boolean;
                        };
                        punctuation: RegExp;
                    };
                };
                string: RegExp;
            };
        };
        datatype: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        boolean: RegExp;
        keyword: RegExp;
        decorator: RegExp;
        function: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let birb: any;
    export let bison: any;
    export namespace bnf {
        export namespace string_8 {
            let pattern_22: RegExp;
            export { pattern_22 as pattern };
        }
        export { string_8 as string };
        export namespace definition {
            let pattern_23: RegExp;
            export { pattern_23 as pattern };
            let alias_6: string[];
            export { alias_6 as alias };
            export namespace inside_4 {
                let punctuation_9: RegExp;
                export { punctuation_9 as punctuation };
            }
            export { inside_4 as inside };
        }
        export namespace rule {
            let pattern_24: RegExp;
            export { pattern_24 as pattern };
            export namespace inside_5 {
                let punctuation_10: RegExp;
                export { punctuation_10 as punctuation };
            }
            export { inside_5 as inside };
        }
        let operator_7: RegExp;
        export { operator_7 as operator };
    }
    import rbnf = bnf;
    export { rbnf };
    export let bqn: {
        shebang: {
            pattern: RegExp;
            alias: string;
            greedy: boolean;
        };
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        'string-literal': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        'character-literal': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        function: RegExp;
        'dot-notation-on-brackets': {
            pattern: RegExp;
            alias: string;
        };
        'special-name': {
            pattern: RegExp;
            alias: string;
        };
        'dot-notation-on-name': {
            pattern: RegExp;
            alias: string;
        };
        'word-number-scientific': {
            pattern: RegExp;
            alias: string;
        };
        'word-name': {
            pattern: RegExp;
            alias: string;
        };
        'word-number': {
            pattern: RegExp;
            alias: string;
        };
        'null-literal': {
            pattern: RegExp;
            alias: string;
        };
        'primitive-functions': {
            pattern: RegExp;
            alias: string;
        };
        'primitive-1-operators': {
            pattern: RegExp;
            alias: string;
        };
        'primitive-2-operators': {
            pattern: RegExp;
            alias: string;
        };
        punctuation: RegExp;
    };
    export namespace brainfuck {
        export namespace pointer {
            let pattern_25: RegExp;
            export { pattern_25 as pattern };
            let alias_7: string;
            export { alias_7 as alias };
        }
        export namespace increment {
            let pattern_26: RegExp;
            export { pattern_26 as pattern };
            let alias_8: string;
            export { alias_8 as alias };
        }
        export namespace decrement {
            let pattern_27: RegExp;
            export { pattern_27 as pattern };
            let alias_9: string;
            export { alias_9 as alias };
        }
        export namespace branching {
            let pattern_28: RegExp;
            export { pattern_28 as pattern };
            let alias_10: string;
            export { alias_10 as alias };
        }
        let operator_8: RegExp;
        export { operator_8 as operator };
        let comment_8: RegExp;
        export { comment_8 as comment };
    }
    export let brightscript: {
        comment: RegExp;
        'directive-statement': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
            inside: {
                'error-message': {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                directive: {
                    pattern: RegExp;
                    alias: string;
                };
                expression: {
                    pattern: RegExp;
                    inside: null;
                };
            };
        };
        property: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
        };
        keyword: RegExp;
        boolean: RegExp;
        function: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
        constant: RegExp;
    };
    export namespace bro {
        export namespace comment_9 {
            let pattern_29: RegExp;
            export { pattern_29 as pattern };
            let lookbehind_9: boolean;
            export { lookbehind_9 as lookbehind };
            export namespace inside_6 {
                let italic: RegExp;
            }
            export { inside_6 as inside };
        }
        export { comment_9 as comment };
        export namespace string_9 {
            let pattern_30: RegExp;
            export { pattern_30 as pattern };
            let greedy_12: boolean;
            export { greedy_12 as greedy };
        }
        export { string_9 as string };
        let boolean_5: RegExp;
        export { boolean_5 as boolean };
        export namespace _function_6 {
            let pattern_31: RegExp;
            export { pattern_31 as pattern };
            let lookbehind_10: boolean;
            export { lookbehind_10 as lookbehind };
        }
        export { _function_6 as function };
        let builtin_1: RegExp;
        export { builtin_1 as builtin };
        export namespace constant_1 {
            let pattern_32: RegExp;
            export { pattern_32 as pattern };
            let lookbehind_11: boolean;
            export { lookbehind_11 as lookbehind };
        }
        export { constant_1 as constant };
        let keyword_9: RegExp;
        export { keyword_9 as keyword };
        let operator_9: RegExp;
        export { operator_9 as operator };
        let number_8: RegExp;
        export { number_8 as number };
        let punctuation_11: RegExp;
        export { punctuation_11 as punctuation };
    }
    export namespace bsl {
        let comment_10: RegExp;
        export { comment_10 as comment };
        let string_10: ({
            pattern: RegExp;
            greedy: boolean;
        } | {
            pattern: RegExp;
            greedy?: undefined;
        })[];
        export { string_10 as string };
        let keyword_10: ({
            pattern: RegExp;
            lookbehind: boolean;
        } | {
            pattern: RegExp;
            lookbehind?: undefined;
        })[];
        export { keyword_10 as keyword };
        export namespace number_9 {
            let pattern_33: RegExp;
            export { pattern_33 as pattern };
            let lookbehind_12: boolean;
            export { lookbehind_12 as lookbehind };
        }
        export { number_9 as number };
        let operator_10: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        } | {
            pattern: RegExp;
            lookbehind?: undefined;
        })[];
        export { operator_10 as operator };
        let punctuation_12: RegExp;
        export { punctuation_12 as punctuation };
        let directive_2: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
        }[];
        export { directive_2 as directive };
    }
    import oscript = bsl;
    export { oscript };
    export let cfscript: any;
    import cfc = cfscript;
    export { cfc };
    export let chaiscript: any;
    export namespace cil {
        let comment_11: RegExp;
        export { comment_11 as comment };
        export namespace string_11 {
            let pattern_34: RegExp;
            export { pattern_34 as pattern };
            let greedy_13: boolean;
            export { greedy_13 as greedy };
        }
        export { string_11 as string };
        export namespace directive_3 {
            let pattern_35: RegExp;
            export { pattern_35 as pattern };
            let lookbehind_13: boolean;
            export { lookbehind_13 as lookbehind };
            let alias_11: string;
            export { alias_11 as alias };
        }
        export { directive_3 as directive };
        let variable_7: RegExp;
        export { variable_7 as variable };
        let keyword_11: RegExp;
        export { keyword_11 as keyword };
        let _function_7: RegExp;
        export { _function_7 as function };
        let boolean_6: RegExp;
        export { boolean_6 as boolean };
        let number_10: RegExp;
        export { number_10 as number };
        let punctuation_13: RegExp;
        export { punctuation_13 as punctuation };
    }
    export let cilkc: {};
    export let cilkcpp: {};
    import cilk = cilkcpp;
    export { cilk };
    export namespace clojure {
        export namespace comment_12 {
            let pattern_36: RegExp;
            export { pattern_36 as pattern };
            let greedy_14: boolean;
            export { greedy_14 as greedy };
        }
        export { comment_12 as comment };
        export namespace string_12 {
            let pattern_37: RegExp;
            export { pattern_37 as pattern };
            let greedy_15: boolean;
            export { greedy_15 as greedy };
        }
        export { string_12 as string };
        let char_1: RegExp;
        export { char_1 as char };
        export namespace symbol_1 {
            let pattern_38: RegExp;
            export { pattern_38 as pattern };
            let lookbehind_14: boolean;
            export { lookbehind_14 as lookbehind };
        }
        export { symbol_1 as symbol };
        export namespace keyword_12 {
            let pattern_39: RegExp;
            export { pattern_39 as pattern };
            let lookbehind_15: boolean;
            export { lookbehind_15 as lookbehind };
        }
        export { keyword_12 as keyword };
        let boolean_7: RegExp;
        export { boolean_7 as boolean };
        export namespace number_11 {
            let pattern_40: RegExp;
            export { pattern_40 as pattern };
            let lookbehind_16: boolean;
            export { lookbehind_16 as lookbehind };
        }
        export { number_11 as number };
        export namespace _function_8 {
            let pattern_41: RegExp;
            export { pattern_41 as pattern };
            let lookbehind_17: boolean;
            export { lookbehind_17 as lookbehind };
        }
        export { _function_8 as function };
        let operator_11: RegExp;
        export { operator_11 as operator };
        let punctuation_14: RegExp;
        export { punctuation_14 as punctuation };
    }
    export namespace cmake {
        let comment_13: RegExp;
        export { comment_13 as comment };
        export namespace string_13 {
            let pattern_42: RegExp;
            export { pattern_42 as pattern };
            let greedy_16: boolean;
            export { greedy_16 as greedy };
            export namespace inside_7 {
                namespace interpolation {
                    let pattern_43: RegExp;
                    export { pattern_43 as pattern };
                    export namespace inside_8 {
                        let punctuation_15: RegExp;
                        export { punctuation_15 as punctuation };
                        let variable_8: RegExp;
                        export { variable_8 as variable };
                    }
                    export { inside_8 as inside };
                }
            }
            export { inside_7 as inside };
        }
        export { string_13 as string };
        let variable_9: RegExp;
        export { variable_9 as variable };
        let property_1: RegExp;
        export { property_1 as property };
        let keyword_13: RegExp;
        export { keyword_13 as keyword };
        let boolean_8: RegExp;
        export { boolean_8 as boolean };
        export let namespace: RegExp;
        let operator_12: RegExp;
        export { operator_12 as operator };
        export namespace inserted {
            let pattern_44: RegExp;
            export { pattern_44 as pattern };
            let alias_12: string;
            export { alias_12 as alias };
        }
        let number_12: RegExp;
        export { number_12 as number };
        let _function_9: RegExp;
        export { _function_9 as function };
        let punctuation_16: RegExp;
        export { punctuation_16 as punctuation };
    }
    export let cobol: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        level: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                number: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                punctuation: RegExp;
            };
        };
        keyword: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        boolean: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        number: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        operator: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        punctuation: RegExp;
    };
    export namespace concurnas {
        export namespace comment_14 {
            let pattern_45: RegExp;
            export { pattern_45 as pattern };
            let lookbehind_18: boolean;
            export { lookbehind_18 as lookbehind };
            let greedy_17: boolean;
            export { greedy_17 as greedy };
        }
        export { comment_14 as comment };
        export namespace langext {
            let pattern_46: RegExp;
            export { pattern_46 as pattern };
            let greedy_18: boolean;
            export { greedy_18 as greedy };
            let inside_9: {
                'class-name': RegExp;
                string: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                punctuation: RegExp;
            };
            export { inside_9 as inside };
        }
        export namespace _function_10 {
            let pattern_47: RegExp;
            export { pattern_47 as pattern };
            let lookbehind_19: boolean;
            export { lookbehind_19 as lookbehind };
        }
        export { _function_10 as function };
        let keyword_14: RegExp;
        export { keyword_14 as keyword };
        let boolean_9: RegExp;
        export { boolean_9 as boolean };
        let number_13: RegExp;
        export { number_13 as number };
        let punctuation_17: RegExp;
        export { punctuation_17 as punctuation };
        let operator_13: RegExp;
        export { operator_13 as operator };
        export namespace annotation {
            let pattern_48: RegExp;
            export { pattern_48 as pattern };
            let alias_13: string;
            export { alias_13 as alias };
        }
    }
    import conc = concurnas;
    export { conc };
    export namespace csv {
        export let value: RegExp;
        let punctuation_18: RegExp;
        export { punctuation_18 as punctuation };
    }
    export let cypher: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        relationship: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
        };
        identifier: {
            pattern: RegExp;
            greedy: boolean;
        };
        variable: RegExp;
        keyword: RegExp;
        function: RegExp;
        boolean: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let d: any;
    export let dax: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        'data-field': {
            pattern: RegExp;
            alias: string;
        };
        measure: {
            pattern: RegExp;
            alias: string;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        function: RegExp;
        keyword: RegExp;
        boolean: {
            pattern: RegExp;
            alias: string;
        };
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let dhall: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                interpolation: {
                    pattern: RegExp;
                    inside: {
                        expression: {
                            pattern: RegExp;
                            lookbehind: boolean;
                            alias: string;
                            inside: null;
                        };
                        punctuation: RegExp;
                    };
                };
            };
        };
        label: {
            pattern: RegExp;
            greedy: boolean;
        };
        url: {
            pattern: RegExp;
            greedy: boolean;
        };
        env: {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                function: RegExp;
                operator: RegExp;
                variable: RegExp;
            };
        };
        hash: {
            pattern: RegExp;
            inside: {
                function: RegExp;
                operator: RegExp;
                number: RegExp;
            };
        };
        keyword: RegExp;
        builtin: RegExp;
        boolean: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
        'class-name': RegExp;
    };
    export namespace ebnf {
        let comment_15: RegExp;
        export { comment_15 as comment };
        export namespace string_14 {
            let pattern_49: RegExp;
            export { pattern_49 as pattern };
            let greedy_19: boolean;
            export { greedy_19 as greedy };
        }
        export { string_14 as string };
        export namespace special {
            let pattern_50: RegExp;
            export { pattern_50 as pattern };
            let greedy_20: boolean;
            export { greedy_20 as greedy };
            let alias_14: string;
            export { alias_14 as alias };
        }
        export namespace definition_1 {
            let pattern_51: RegExp;
            export { pattern_51 as pattern };
            let lookbehind_20: boolean;
            export { lookbehind_20 as lookbehind };
            let alias_15: string[];
            export { alias_15 as alias };
        }
        export { definition_1 as definition };
        let rule_1: RegExp;
        export { rule_1 as rule };
        let punctuation_19: RegExp;
        export { punctuation_19 as punctuation };
        let operator_14: RegExp;
        export { operator_14 as operator };
    }
    export namespace editorconfig {
        let comment_16: RegExp;
        export { comment_16 as comment };
        export namespace section {
            let pattern_52: RegExp;
            export { pattern_52 as pattern };
            let lookbehind_21: boolean;
            export { lookbehind_21 as lookbehind };
            let alias_16: string;
            export { alias_16 as alias };
            export namespace inside_10 {
                let regex_1: RegExp;
                export { regex_1 as regex };
                let operator_15: RegExp;
                export { operator_15 as operator };
                let punctuation_20: RegExp;
                export { punctuation_20 as punctuation };
            }
            export { inside_10 as inside };
        }
        export namespace key {
            let pattern_53: RegExp;
            export { pattern_53 as pattern };
            let lookbehind_22: boolean;
            export { lookbehind_22 as lookbehind };
            let alias_17: string;
            export { alias_17 as alias };
        }
        export namespace value_1 {
            let pattern_54: RegExp;
            export { pattern_54 as pattern };
            let alias_18: string;
            export { alias_18 as alias };
            export namespace inside_11 {
                let punctuation_21: RegExp;
                export { punctuation_21 as punctuation };
            }
            export { inside_11 as inside };
        }
        export { value_1 as value };
    }
    export let eiffel: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        }[];
        char: RegExp;
        keyword: RegExp;
        boolean: RegExp;
        'class-name': RegExp;
        number: RegExp[];
        punctuation: RegExp;
        operator: RegExp;
    };
    export let elixir: {
        doc: {
            pattern: RegExp;
            inside: {
                attribute: RegExp;
                string: RegExp;
            };
        };
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        regex: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
            inside: {};
        }[];
        atom: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        module: {
            pattern: RegExp;
            alias: string;
        };
        'attr-name': RegExp;
        argument: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        attribute: {
            pattern: RegExp;
            alias: string;
        };
        function: RegExp;
        number: RegExp;
        keyword: RegExp;
        boolean: RegExp;
        operator: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        punctuation: RegExp;
    };
    export let elm: {
        comment: RegExp;
        char: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        }[];
        'import-statement': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                keyword: RegExp;
            };
        };
        keyword: RegExp;
        builtin: RegExp;
        number: RegExp;
        operator: RegExp;
        hvariable: RegExp;
        constant: RegExp;
        punctuation: RegExp;
    };
    export namespace lua {
        let comment_17: RegExp;
        export { comment_17 as comment };
        export namespace string_15 {
            let pattern_55: RegExp;
            export { pattern_55 as pattern };
            let greedy_21: boolean;
            export { greedy_21 as greedy };
        }
        export { string_15 as string };
        let number_14: RegExp;
        export { number_14 as number };
        let keyword_15: RegExp;
        export { keyword_15 as keyword };
        let _function_11: RegExp;
        export { _function_11 as function };
        let operator_16: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { operator_16 as operator };
        let punctuation_22: RegExp;
        export { punctuation_22 as punctuation };
    }
    export let erlang: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'quoted-function': {
            pattern: RegExp;
            alias: string;
        };
        'quoted-atom': {
            pattern: RegExp;
            alias: string;
        };
        boolean: RegExp;
        keyword: RegExp;
        number: RegExp[];
        function: RegExp;
        variable: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        operator: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        atom: RegExp;
        punctuation: RegExp;
    };
    export let xlsx: any;
    export let xls: any;
    export let fsharp: any;
    export let fortran: {
        'quoted-number': {
            pattern: RegExp;
            alias: string;
        };
        string: {
            pattern: RegExp;
            inside: {
                comment: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
            };
        };
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        boolean: RegExp;
        number: RegExp;
        keyword: RegExp[];
        operator: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        punctuation: RegExp;
    };
    export let gamemakerlanguage: any;
    export let gml: any;
    export namespace gap {
        export namespace shell {
            let pattern_56: RegExp;
            export { pattern_56 as pattern };
            let greedy_22: boolean;
            export { greedy_22 as greedy };
            export namespace inside_12 {
                export namespace gap_1 {
                    let pattern_57: RegExp;
                    export { pattern_57 as pattern };
                    let lookbehind_23: boolean;
                    export { lookbehind_23 as lookbehind };
                    let inside_13: null;
                    export { inside_13 as inside };
                }
                export { gap_1 as gap };
                let punctuation_23: RegExp;
                export { punctuation_23 as punctuation };
            }
            export { inside_12 as inside };
        }
        export namespace comment_18 {
            let pattern_58: RegExp;
            export { pattern_58 as pattern };
            let greedy_23: boolean;
            export { greedy_23 as greedy };
        }
        export { comment_18 as comment };
        export namespace string_16 {
            let pattern_59: RegExp;
            export { pattern_59 as pattern };
            let lookbehind_24: boolean;
            export { lookbehind_24 as lookbehind };
            let greedy_24: boolean;
            export { greedy_24 as greedy };
            export namespace inside_14 {
                namespace continuation {
                    let pattern_60: RegExp;
                    export { pattern_60 as pattern };
                    let lookbehind_25: boolean;
                    export { lookbehind_25 as lookbehind };
                    let alias_19: string;
                    export { alias_19 as alias };
                }
            }
            export { inside_14 as inside };
        }
        export { string_16 as string };
        let keyword_16: RegExp;
        export { keyword_16 as keyword };
        let boolean_10: RegExp;
        export { boolean_10 as boolean };
        let _function_12: RegExp;
        export { _function_12 as function };
        export namespace number_15 {
            let pattern_61: RegExp;
            export { pattern_61 as pattern };
            let lookbehind_26: boolean;
            export { lookbehind_26 as lookbehind };
        }
        export { number_15 as number };
        export namespace continuation_1 {
            let pattern_62: RegExp;
            export { pattern_62 as pattern };
            let lookbehind_27: boolean;
            export { lookbehind_27 as lookbehind };
            let alias_20: string;
            export { alias_20 as alias };
        }
        export { continuation_1 as continuation };
        let operator_17: RegExp;
        export { operator_17 as operator };
        let punctuation_24: RegExp;
        export { punctuation_24 as punctuation };
    }
    export namespace gcode {
        let comment_19: RegExp;
        export { comment_19 as comment };
        export namespace string_17 {
            let pattern_63: RegExp;
            export { pattern_63 as pattern };
            let greedy_25: boolean;
            export { greedy_25 as greedy };
        }
        export { string_17 as string };
        let keyword_17: RegExp;
        export { keyword_17 as keyword };
        let property_2: RegExp;
        export { property_2 as property };
        export namespace checksum {
            let pattern_64: RegExp;
            export { pattern_64 as pattern };
            let lookbehind_28: boolean;
            export { lookbehind_28 as lookbehind };
            let alias_21: string;
            export { alias_21 as alias };
        }
        let punctuation_25: RegExp;
        export { punctuation_25 as punctuation };
    }
    export let gdscript: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
        };
        keyword: RegExp;
        function: RegExp;
        variable: RegExp;
        number: RegExp[];
        constant: RegExp;
        boolean: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let gedcom: {
        'line-value': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                pointer: {
                    pattern: RegExp;
                    alias: string;
                };
            };
        };
        record: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        level: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        pointer: {
            pattern: RegExp;
            alias: string;
        };
    };
    export namespace gettext {
        let comment_20: ({
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        } | {
            pattern: RegExp;
            greedy: boolean;
            alias?: undefined;
        })[];
        export { comment_20 as comment };
        export namespace string_18 {
            let pattern_65: RegExp;
            export { pattern_65 as pattern };
            let lookbehind_29: boolean;
            export { lookbehind_29 as lookbehind };
            let greedy_26: boolean;
            export { greedy_26 as greedy };
        }
        export { string_18 as string };
        let keyword_18: RegExp;
        export { keyword_18 as keyword };
        let number_16: RegExp;
        export { number_16 as number };
        let punctuation_26: RegExp;
        export { punctuation_26 as punctuation };
    }
    import po = gettext;
    export { po };
    export let git: {
        comment: RegExp;
        deleted: RegExp;
        inserted: RegExp;
        string: RegExp;
        command: {
            pattern: RegExp;
            inside: {
                parameter: RegExp;
            };
        };
        coord: RegExp;
        'commit-sha1': RegExp;
    };
    export let glsl: any;
    export let gn: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        'string-literal': {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            inside: {
                interpolation: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        number: RegExp;
                        variable: RegExp;
                        'interpolation-punctuation': {
                            pattern: RegExp;
                            alias: string;
                        };
                        expression: {
                            pattern: RegExp;
                            inside: null;
                        };
                    };
                };
                string: RegExp;
            };
        };
        keyword: RegExp;
        boolean: RegExp;
        'builtin-function': {
            pattern: RegExp;
            alias: string;
        };
        function: RegExp;
        constant: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    import gni = gn;
    export { gni };
    export let ld: any;
    export let go: any;
    export let graphql: {
        comment: RegExp;
        description: {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
            inside: {
                'language-markdown': {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: any;
                };
            };
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        number: RegExp;
        boolean: RegExp;
        variable: RegExp;
        directive: {
            pattern: RegExp;
            alias: string;
        };
        'attr-name': {
            pattern: RegExp;
            greedy: boolean;
        };
        'atom-input': {
            pattern: RegExp;
            alias: string;
        };
        scalar: RegExp;
        constant: RegExp;
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
        };
        fragment: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'definition-mutation': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'definition-query': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        keyword: RegExp;
        operator: RegExp;
        'property-query': RegExp;
        object: RegExp;
        punctuation: RegExp;
        property: RegExp;
    };
    export let haskell: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        char: {
            pattern: RegExp;
            alias: string;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        keyword: RegExp;
        'import-statement': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                keyword: RegExp;
                punctuation: RegExp;
            };
        };
        builtin: RegExp;
        number: RegExp;
        operator: (RegExp | {
            pattern: RegExp;
            greedy: boolean;
            lookbehind?: undefined;
        } | {
            pattern: RegExp;
            lookbehind: boolean;
            greedy?: undefined;
        })[];
        hvariable: {
            pattern: RegExp;
            inside: {
                punctuation: RegExp;
            };
        };
        constant: {
            pattern: RegExp;
            inside: {
                punctuation: RegExp;
            };
        };
        punctuation: RegExp;
    };
    import hs = haskell;
    export { hs };
    export let haxe: any;
    export namespace hcl {
        let comment_21: RegExp;
        export { comment_21 as comment };
        export namespace heredoc {
            let pattern_66: RegExp;
            export { pattern_66 as pattern };
            let greedy_27: boolean;
            export { greedy_27 as greedy };
            let alias_22: string;
            export { alias_22 as alias };
        }
        let keyword_19: (RegExp | {
            pattern: RegExp;
            inside: {
                type: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
            };
        })[];
        export { keyword_19 as keyword };
        let property_3: RegExp[];
        export { property_3 as property };
        export namespace string_19 {
            let pattern_67: RegExp;
            export { pattern_67 as pattern };
            let greedy_28: boolean;
            export { greedy_28 as greedy };
            export namespace inside_15 {
                export namespace interpolation_1 {
                    let pattern_68: RegExp;
                    export { pattern_68 as pattern };
                    let lookbehind_30: boolean;
                    export { lookbehind_30 as lookbehind };
                    export namespace inside_16 {
                        export namespace type {
                            let pattern_69: RegExp;
                            export { pattern_69 as pattern };
                            let lookbehind_31: boolean;
                            export { lookbehind_31 as lookbehind };
                            let alias_23: string;
                            export { alias_23 as alias };
                        }
                        let keyword_20: RegExp;
                        export { keyword_20 as keyword };
                        let _function_13: RegExp;
                        export { _function_13 as function };
                        export namespace string_20 {
                            let pattern_70: RegExp;
                            export { pattern_70 as pattern };
                            let greedy_29: boolean;
                            export { greedy_29 as greedy };
                        }
                        export { string_20 as string };
                        let number_17: RegExp;
                        export { number_17 as number };
                        let punctuation_27: RegExp;
                        export { punctuation_27 as punctuation };
                    }
                    export { inside_16 as inside };
                }
                export { interpolation_1 as interpolation };
            }
            export { inside_15 as inside };
        }
        export { string_19 as string };
        let number_18: RegExp;
        export { number_18 as number };
        let boolean_11: RegExp;
        export { boolean_11 as boolean };
        let punctuation_28: RegExp;
        export { punctuation_28 as punctuation };
    }
    export let hlsl: any;
    export let hoon: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        constant: RegExp;
        'class-name': RegExp;
        function: RegExp;
        keyword: RegExp;
    };
    export namespace hpkp {
        export namespace directive_4 {
            let pattern_71: RegExp;
            export { pattern_71 as pattern };
            let alias_24: string;
            export { alias_24 as alias };
        }
        export { directive_4 as directive };
        let operator_18: RegExp;
        export { operator_18 as operator };
        let punctuation_29: RegExp;
        export { punctuation_29 as punctuation };
    }
    export namespace hsts {
        export namespace directive_5 {
            let pattern_72: RegExp;
            export { pattern_72 as pattern };
            let alias_25: string;
            export { alias_25 as alias };
        }
        export { directive_5 as directive };
        let operator_19: RegExp;
        export { operator_19 as operator };
        let punctuation_30: RegExp;
        export { punctuation_30 as punctuation };
    }
    export namespace ichigojam {
        let comment_22: RegExp;
        export { comment_22 as comment };
        export namespace string_21 {
            let pattern_73: RegExp;
            export { pattern_73 as pattern };
            let greedy_30: boolean;
            export { greedy_30 as greedy };
        }
        export { string_21 as string };
        let number_19: RegExp;
        export { number_19 as number };
        let keyword_21: RegExp;
        export { keyword_21 as keyword };
        let _function_14: RegExp;
        export { _function_14 as function };
        export let label: RegExp;
        let operator_20: RegExp;
        export { operator_20 as operator };
        let punctuation_31: RegExp;
        export { punctuation_31 as punctuation };
    }
    export let icon: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        number: RegExp;
        'builtin-keyword': {
            pattern: RegExp;
            alias: string;
        };
        directive: {
            pattern: RegExp;
            alias: string;
        };
        keyword: RegExp;
        function: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let idris: any;
    import idr = idris;
    export { idr };
    export namespace inform7 {
        export namespace string_22 {
            let pattern_74: RegExp;
            export { pattern_74 as pattern };
            export namespace inside_17 {
                namespace substitution {
                    let pattern_75: RegExp;
                    export { pattern_75 as pattern };
                    export namespace inside_18 {
                        namespace delimiter {
                            let pattern_76: RegExp;
                            export { pattern_76 as pattern };
                            let alias_26: string;
                            export { alias_26 as alias };
                        }
                    }
                    export { inside_18 as inside };
                }
            }
            export { inside_17 as inside };
        }
        export { string_22 as string };
        export namespace comment_23 {
            let pattern_77: RegExp;
            export { pattern_77 as pattern };
            let greedy_31: boolean;
            export { greedy_31 as greedy };
        }
        export { comment_23 as comment };
        export namespace title {
            let pattern_78: RegExp;
            export { pattern_78 as pattern };
            let alias_27: string;
            export { alias_27 as alias };
        }
        export namespace number_20 {
            let pattern_79: RegExp;
            export { pattern_79 as pattern };
            let lookbehind_32: boolean;
            export { lookbehind_32 as lookbehind };
        }
        export { number_20 as number };
        export namespace verb {
            let pattern_80: RegExp;
            export { pattern_80 as pattern };
            let lookbehind_33: boolean;
            export { lookbehind_33 as lookbehind };
            let alias_28: string;
            export { alias_28 as alias };
        }
        export namespace keyword_22 {
            let pattern_81: RegExp;
            export { pattern_81 as pattern };
            let lookbehind_34: boolean;
            export { lookbehind_34 as lookbehind };
        }
        export { keyword_22 as keyword };
        export namespace property_4 {
            let pattern_82: RegExp;
            export { pattern_82 as pattern };
            let lookbehind_35: boolean;
            export { lookbehind_35 as lookbehind };
            let alias_29: string;
            export { alias_29 as alias };
        }
        export { property_4 as property };
        export namespace position {
            let pattern_83: RegExp;
            export { pattern_83 as pattern };
            let lookbehind_36: boolean;
            export { lookbehind_36 as lookbehind };
            let alias_30: string;
            export { alias_30 as alias };
        }
        export namespace type_1 {
            let pattern_84: RegExp;
            export { pattern_84 as pattern };
            let lookbehind_37: boolean;
            export { lookbehind_37 as lookbehind };
            let alias_31: string;
            export { alias_31 as alias };
        }
        export { type_1 as type };
        let punctuation_32: RegExp;
        export { punctuation_32 as punctuation };
    }
    export namespace ini {
        export namespace comment_24 {
            let pattern_85: RegExp;
            export { pattern_85 as pattern };
            let lookbehind_38: boolean;
            export { lookbehind_38 as lookbehind };
        }
        export { comment_24 as comment };
        export namespace section_1 {
            let pattern_86: RegExp;
            export { pattern_86 as pattern };
            let lookbehind_39: boolean;
            export { lookbehind_39 as lookbehind };
            let inside_19: {
                'section-name': {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
                punctuation: RegExp;
            };
            export { inside_19 as inside };
        }
        export { section_1 as section };
        export namespace key_1 {
            let pattern_87: RegExp;
            export { pattern_87 as pattern };
            let lookbehind_40: boolean;
            export { lookbehind_40 as lookbehind };
            let alias_32: string;
            export { alias_32 as alias };
        }
        export { key_1 as key };
        export namespace value_2 {
            let pattern_88: RegExp;
            export { pattern_88 as pattern };
            let lookbehind_41: boolean;
            export { lookbehind_41 as lookbehind };
            let alias_33: string;
            export { alias_33 as alias };
            let inside_20: {
                'inner-value': {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
            };
            export { inside_20 as inside };
        }
        export { value_2 as value };
        let punctuation_33: RegExp;
        export { punctuation_33 as punctuation };
    }
    export let io: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        'triple-quoted-string': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        keyword: RegExp;
        builtin: RegExp;
        boolean: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export namespace j {
        export namespace comment_25 {
            let pattern_89: RegExp;
            export { pattern_89 as pattern };
            let greedy_32: boolean;
            export { greedy_32 as greedy };
        }
        export { comment_25 as comment };
        export namespace string_23 {
            let pattern_90: RegExp;
            export { pattern_90 as pattern };
            let greedy_33: boolean;
            export { greedy_33 as greedy };
        }
        export { string_23 as string };
        let keyword_23: RegExp;
        export { keyword_23 as keyword };
        export namespace verb_1 {
            let pattern_91: RegExp;
            export { pattern_91 as pattern };
            let alias_34: string;
            export { alias_34 as alias };
        }
        export { verb_1 as verb };
        let number_21: RegExp;
        export { number_21 as number };
        export namespace adverb {
            let pattern_92: RegExp;
            export { pattern_92 as pattern };
            let alias_35: string;
            export { alias_35 as alias };
        }
        let operator_21: RegExp;
        export { operator_21 as operator };
        export namespace conjunction {
            let pattern_93: RegExp;
            export { pattern_93 as pattern };
            let alias_36: string;
            export { alias_36 as alias };
        }
        let punctuation_34: RegExp;
        export { punctuation_34 as punctuation };
    }
    export let javastacktrace: {
        summary: {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                keyword: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                string: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                exceptions: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        'class-name': RegExp;
                        namespace: RegExp;
                        punctuation: RegExp;
                    };
                };
                message: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
                punctuation: RegExp;
            };
        };
        'stack-frame': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                keyword: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                source: ({
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        file: RegExp;
                        punctuation: RegExp;
                        'line-number': {
                            pattern: RegExp;
                            alias: string;
                        };
                        keyword?: undefined;
                    };
                } | {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        keyword: RegExp;
                        file?: undefined;
                        punctuation?: undefined;
                        'line-number'?: undefined;
                    };
                })[];
                'class-name': RegExp;
                function: RegExp;
                'class-loader': {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                    inside: {
                        punctuation: RegExp;
                    };
                };
                module: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        version: {
                            pattern: RegExp;
                            lookbehind: boolean;
                            alias: string;
                        };
                        punctuation: RegExp;
                    };
                };
                namespace: {
                    pattern: RegExp;
                    inside: {
                        punctuation: RegExp;
                    };
                };
                punctuation: RegExp;
            };
        };
        more: {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                punctuation: RegExp;
                number: RegExp;
                keyword: RegExp;
            };
        };
    };
    export namespace jexl {
        let string_24: RegExp;
        export { string_24 as string };
        export namespace transform {
            let pattern_94: RegExp;
            export { pattern_94 as pattern };
            let alias_37: string;
            export { alias_37 as alias };
            let lookbehind_42: boolean;
            export { lookbehind_42 as lookbehind };
        }
        let _function_15: RegExp;
        export { _function_15 as function };
        let number_22: RegExp;
        export { number_22 as number };
        let operator_22: RegExp;
        export { operator_22 as operator };
        let boolean_12: RegExp;
        export { boolean_12 as boolean };
        let keyword_24: RegExp;
        export { keyword_24 as keyword };
        let punctuation_35: RegExp;
        export { punctuation_35 as punctuation };
    }
    export let jolie: any;
    export namespace json {
        export namespace property_5 {
            let pattern_95: RegExp;
            export { pattern_95 as pattern };
            let lookbehind_43: boolean;
            export { lookbehind_43 as lookbehind };
            let greedy_34: boolean;
            export { greedy_34 as greedy };
        }
        export { property_5 as property };
        export namespace string_25 {
            let pattern_96: RegExp;
            export { pattern_96 as pattern };
            let lookbehind_44: boolean;
            export { lookbehind_44 as lookbehind };
            let greedy_35: boolean;
            export { greedy_35 as greedy };
        }
        export { string_25 as string };
        export namespace comment_26 {
            let pattern_97: RegExp;
            export { pattern_97 as pattern };
            let greedy_36: boolean;
            export { greedy_36 as greedy };
        }
        export { comment_26 as comment };
        let number_23: RegExp;
        export { number_23 as number };
        let punctuation_36: RegExp;
        export { punctuation_36 as punctuation };
        let operator_23: RegExp;
        export { operator_23 as operator };
        let boolean_13: RegExp;
        export { boolean_13 as boolean };
        export namespace _null {
            let pattern_98: RegExp;
            export { pattern_98 as pattern };
            let alias_38: string;
            export { alias_38 as alias };
        }
        export { _null as null };
    }
    import webmanifest = json;
    export { webmanifest };
    export let jsonp: any;
    export let jsstacktrace: {
        'error-message': {
            pattern: RegExp;
            alias: string;
        };
        'stack-frame': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                'not-my-code': {
                    pattern: RegExp;
                    alias: string;
                };
                filename: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
                function: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        punctuation: RegExp;
                    };
                };
                punctuation: RegExp;
                keyword: RegExp;
                alias: {
                    pattern: RegExp;
                    alias: string;
                };
                'line-number': {
                    pattern: RegExp;
                    alias: string;
                    inside: {
                        punctuation: RegExp;
                    };
                };
            };
        };
    };
    export namespace julia {
        export namespace comment_27 {
            let pattern_99: RegExp;
            export { pattern_99 as pattern };
            let lookbehind_45: boolean;
            export { lookbehind_45 as lookbehind };
        }
        export { comment_27 as comment };
        export namespace regex_2 {
            let pattern_100: RegExp;
            export { pattern_100 as pattern };
            let greedy_37: boolean;
            export { greedy_37 as greedy };
        }
        export { regex_2 as regex };
        export namespace string_26 {
            let pattern_101: RegExp;
            export { pattern_101 as pattern };
            let greedy_38: boolean;
            export { greedy_38 as greedy };
        }
        export { string_26 as string };
        export namespace char_2 {
            let pattern_102: RegExp;
            export { pattern_102 as pattern };
            let lookbehind_46: boolean;
            export { lookbehind_46 as lookbehind };
            let greedy_39: boolean;
            export { greedy_39 as greedy };
        }
        export { char_2 as char };
        let keyword_25: RegExp;
        export { keyword_25 as keyword };
        let boolean_14: RegExp;
        export { boolean_14 as boolean };
        let number_24: RegExp;
        export { number_24 as number };
        let operator_24: RegExp;
        export { operator_24 as operator };
        let punctuation_37: RegExp;
        export { punctuation_37 as punctuation };
        let constant_2: RegExp;
        export { constant_2 as constant };
    }
    export let keepalived: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        ip: {
            pattern: RegExp;
            alias: string;
        };
        path: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        variable: RegExp;
        email: {
            pattern: RegExp;
            alias: string;
        };
        'conditional-configuration': {
            pattern: RegExp;
            alias: string;
        };
        operator: RegExp;
        property: RegExp;
        constant: RegExp;
        number: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        boolean: RegExp;
        punctuation: RegExp;
    };
    export let keyman: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'virtual-key': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        'header-keyword': {
            pattern: RegExp;
            alias: string;
        };
        'header-statement': {
            pattern: RegExp;
            alias: string;
        };
        'rule-keyword': {
            pattern: RegExp;
            alias: string;
        };
        'structural-keyword': {
            pattern: RegExp;
            alias: string;
        };
        'compile-target': {
            pattern: RegExp;
            alias: string;
        };
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let kusto: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        verb: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        command: {
            pattern: RegExp;
            alias: string;
        };
        'class-name': RegExp;
        keyword: RegExp;
        boolean: RegExp;
        function: RegExp;
        datetime: {
            pattern: RegExp;
            alias: string;
        }[];
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let less: any;
    export namespace liquid {
        export namespace comment_28 {
            let pattern_103: RegExp;
            export { pattern_103 as pattern };
            let lookbehind_47: boolean;
            export { lookbehind_47 as lookbehind };
        }
        export { comment_28 as comment };
        export namespace delimiter_1 {
            let pattern_104: RegExp;
            export { pattern_104 as pattern };
            let alias_39: string;
            export { alias_39 as alias };
        }
        export { delimiter_1 as delimiter };
        export namespace string_27 {
            let pattern_105: RegExp;
            export { pattern_105 as pattern };
            let greedy_40: boolean;
            export { greedy_40 as greedy };
        }
        export { string_27 as string };
        let keyword_26: RegExp;
        export { keyword_26 as keyword };
        export let object: RegExp;
        let _function_16: ({
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        } | {
            pattern: RegExp;
            lookbehind: boolean;
            alias?: undefined;
        })[];
        export { _function_16 as function };
        let boolean_15: RegExp;
        export { boolean_15 as boolean };
        export namespace range_1 {
            let pattern_106: RegExp;
            export { pattern_106 as pattern };
            let alias_40: string;
            export { alias_40 as alias };
        }
        export { range_1 as range };
        let number_25: RegExp;
        export { number_25 as number };
        let operator_25: RegExp;
        export { operator_25 as operator };
        let punctuation_38: RegExp;
        export { punctuation_38 as punctuation };
        export namespace empty {
            let pattern_107: RegExp;
            export { pattern_107 as pattern };
            let alias_41: string;
            export { alias_41 as alias };
        }
    }
    export let livescript: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
        }[];
        'interpolated-string': {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            inside: {
                variable: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                interpolation: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        'interpolation-punctuation': {
                            pattern: RegExp;
                            alias: string;
                        };
                    };
                };
                string: RegExp;
            };
        };
        string: (RegExp | {
            pattern: RegExp;
            greedy: boolean;
        })[];
        regex: ({
            pattern: RegExp;
            greedy: boolean;
            inside: {
                comment: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
            };
        } | {
            pattern: RegExp;
            greedy: boolean;
            inside?: undefined;
        })[];
        keyword: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        'keyword-operator': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        boolean: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        argument: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        number: RegExp;
        identifier: RegExp;
        operator: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        punctuation: RegExp;
    };
    export let log: {
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        exception: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string[];
            inside: any;
        };
        level: {
            pattern: RegExp;
            alias: string[];
        }[];
        property: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        separator: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        url: RegExp;
        email: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'ip-address': {
            pattern: RegExp;
            alias: string;
        };
        'mac-address': {
            pattern: RegExp;
            alias: string;
        };
        domain: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        uuid: {
            pattern: RegExp;
            alias: string;
        };
        hash: {
            pattern: RegExp;
            alias: string;
        };
        'file-path': {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
        };
        date: {
            pattern: RegExp;
            alias: string;
        };
        time: {
            pattern: RegExp;
            alias: string;
        };
        boolean: RegExp;
        number: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    export namespace lolcode {
        let comment_29: RegExp[];
        export { comment_29 as comment };
        export namespace string_28 {
            let pattern_108: RegExp;
            export { pattern_108 as pattern };
            export namespace inside_21 {
                let variable_10: RegExp;
                export { variable_10 as variable };
                let symbol_2: RegExp[];
                export { symbol_2 as symbol };
            }
            export { inside_21 as inside };
            let greedy_41: boolean;
            export { greedy_41 as greedy };
        }
        export { string_28 as string };
        let number_26: RegExp;
        export { number_26 as number };
        export namespace symbol_3 {
            let pattern_109: RegExp;
            export { pattern_109 as pattern };
            let lookbehind_48: boolean;
            export { lookbehind_48 as lookbehind };
            export namespace inside_22 {
                let keyword_27: RegExp;
                export { keyword_27 as keyword };
            }
            export { inside_22 as inside };
        }
        export { symbol_3 as symbol };
        export namespace label_1 {
            let pattern_110: RegExp;
            export { pattern_110 as pattern };
            let lookbehind_49: boolean;
            export { lookbehind_49 as lookbehind };
            let alias_42: string;
            export { alias_42 as alias };
        }
        export { label_1 as label };
        export namespace _function_17 {
            let pattern_111: RegExp;
            export { pattern_111 as pattern };
            let lookbehind_50: boolean;
            export { lookbehind_50 as lookbehind };
        }
        export { _function_17 as function };
        let keyword_28: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { keyword_28 as keyword };
        export namespace boolean_16 {
            let pattern_112: RegExp;
            export { pattern_112 as pattern };
            let lookbehind_51: boolean;
            export { lookbehind_51 as lookbehind };
        }
        export { boolean_16 as boolean };
        export namespace variable_11 {
            let pattern_113: RegExp;
            export { pattern_113 as pattern };
            let lookbehind_52: boolean;
            export { lookbehind_52 as lookbehind };
        }
        export { variable_11 as variable };
        export namespace operator_26 {
            let pattern_114: RegExp;
            export { pattern_114 as pattern };
            let lookbehind_53: boolean;
            export { lookbehind_53 as lookbehind };
        }
        export { operator_26 as operator };
        let punctuation_39: RegExp;
        export { punctuation_39 as punctuation };
    }
    export namespace magma {
        export namespace output {
            let pattern_115: RegExp;
            export { pattern_115 as pattern };
            let lookbehind_54: boolean;
            export { lookbehind_54 as lookbehind };
            let greedy_42: boolean;
            export { greedy_42 as greedy };
        }
        export namespace comment_30 {
            let pattern_116: RegExp;
            export { pattern_116 as pattern };
            let greedy_43: boolean;
            export { greedy_43 as greedy };
        }
        export { comment_30 as comment };
        export namespace string_29 {
            let pattern_117: RegExp;
            export { pattern_117 as pattern };
            let lookbehind_55: boolean;
            export { lookbehind_55 as lookbehind };
            let greedy_44: boolean;
            export { greedy_44 as greedy };
        }
        export { string_29 as string };
        let keyword_29: RegExp;
        export { keyword_29 as keyword };
        let boolean_17: RegExp;
        export { boolean_17 as boolean };
        export namespace generator {
            let pattern_118: RegExp;
            export { pattern_118 as pattern };
            let alias_43: string;
            export { alias_43 as alias };
        }
        let _function_18: RegExp;
        export { _function_18 as function };
        export namespace number_27 {
            let pattern_119: RegExp;
            export { pattern_119 as pattern };
            let lookbehind_56: boolean;
            export { lookbehind_56 as lookbehind };
        }
        export { number_27 as number };
        let operator_27: RegExp;
        export { operator_27 as operator };
        let punctuation_40: RegExp;
        export { punctuation_40 as punctuation };
    }
    export let makefile: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'builtin-target': {
            pattern: RegExp;
            alias: string;
        };
        target: {
            pattern: RegExp;
            alias: string;
            inside: {
                variable: RegExp;
            };
        };
        variable: RegExp;
        keyword: RegExp;
        function: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    export namespace matlab {
        let comment_31: RegExp[];
        export { comment_31 as comment };
        export namespace string_30 {
            let pattern_120: RegExp;
            export { pattern_120 as pattern };
            let greedy_45: boolean;
            export { greedy_45 as greedy };
        }
        export { string_30 as string };
        let number_28: RegExp;
        export { number_28 as number };
        let keyword_30: RegExp;
        export { keyword_30 as keyword };
        let _function_19: RegExp;
        export { _function_19 as function };
        let operator_28: RegExp;
        export { operator_28 as operator };
        let punctuation_41: RegExp;
        export { punctuation_41 as punctuation };
    }
    export let mel: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        code: {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
            inside: {
                delimiter: {
                    pattern: RegExp;
                    alias: string;
                };
                statement: {
                    pattern: RegExp;
                    inside: null;
                };
            };
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        variable: RegExp;
        number: RegExp;
        flag: {
            pattern: RegExp;
            alias: string;
        };
        keyword: RegExp;
        function: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        'tensor-punctuation': {
            pattern: RegExp;
            alias: string;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    export let mermaid: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        style: {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                property: RegExp;
                operator: RegExp;
                punctuation: RegExp;
            };
        };
        'inter-arrow-label': {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            inside: {
                arrow: {
                    pattern: RegExp;
                    alias: string;
                };
                label: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
                'arrow-head': {
                    pattern: RegExp;
                    alias: string[];
                };
            };
        };
        arrow: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        }[];
        label: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
        };
        text: {
            pattern: RegExp;
            alias: string;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        annotation: {
            pattern: RegExp;
            alias: string;
        };
        keyword: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        }[];
        entity: RegExp;
        operator: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        punctuation: RegExp;
    };
    export namespace metafont {
        export namespace comment_32 {
            let pattern_121: RegExp;
            export { pattern_121 as pattern };
            let greedy_46: boolean;
            export { greedy_46 as greedy };
        }
        export { comment_32 as comment };
        export namespace string_31 {
            let pattern_122: RegExp;
            export { pattern_122 as pattern };
            let greedy_47: boolean;
            export { greedy_47 as greedy };
        }
        export { string_31 as string };
        let number_29: RegExp;
        export { number_29 as number };
        let boolean_18: RegExp;
        export { boolean_18 as boolean };
        let punctuation_42: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { punctuation_42 as punctuation };
        let constant_3: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { constant_3 as constant };
        export namespace quantity {
            let pattern_123: RegExp;
            export { pattern_123 as pattern };
            let alias_44: string;
            export { alias_44 as alias };
        }
        export namespace command_1 {
            let pattern_124: RegExp;
            export { pattern_124 as pattern };
            let alias_45: string;
            export { alias_45 as alias };
        }
        export { command_1 as command };
        let operator_29: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { operator_29 as operator };
        export namespace macro {
            let pattern_125: RegExp;
            export { pattern_125 as pattern };
            let alias_46: string;
            export { alias_46 as alias };
        }
        let builtin_2: RegExp;
        export { builtin_2 as builtin };
        let keyword_31: RegExp;
        export { keyword_31 as keyword };
        export namespace type_2 {
            let pattern_126: RegExp;
            export { pattern_126 as pattern };
            let alias_47: string;
            export { alias_47 as alias };
        }
        export { type_2 as type };
        export namespace variable_12 {
            let pattern_127: RegExp;
            export { pattern_127 as pattern };
            let lookbehind_57: boolean;
            export { lookbehind_57 as lookbehind };
        }
        export { variable_12 as variable };
    }
    export namespace mizar {
        let comment_33: RegExp;
        export { comment_33 as comment };
        let keyword_32: RegExp;
        export { keyword_32 as keyword };
        export namespace parameter {
            let pattern_128: RegExp;
            export { pattern_128 as pattern };
            let alias_48: string;
            export { alias_48 as alias };
        }
        let variable_13: RegExp;
        export { variable_13 as variable };
        let number_30: RegExp;
        export { number_30 as number };
        let operator_30: RegExp;
        export { operator_30 as operator };
        let punctuation_43: RegExp;
        export { punctuation_43 as punctuation };
    }
    export let monkey: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        preprocessor: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
        };
        function: RegExp;
        'type-char': {
            pattern: RegExp;
            alias: string;
        };
        number: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        keyword: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let moonscript: {
        comment: RegExp;
        string: ({
            pattern: RegExp;
            greedy: boolean;
            inside?: undefined;
        } | {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                interpolation: {
                    pattern: RegExp;
                    inside: {
                        moonscript: {
                            pattern: RegExp;
                            lookbehind: boolean;
                            inside: null;
                        };
                        'interpolation-punctuation': {
                            pattern: RegExp;
                            alias: string;
                        };
                    };
                };
            };
        })[];
        'class-name': (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        keyword: RegExp;
        variable: RegExp;
        property: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        function: {
            pattern: RegExp;
            inside: {
                punctuation: RegExp;
            };
        };
        boolean: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    import moon = moonscript;
    export { moon };
    export namespace n1ql {
        export namespace comment_34 {
            let pattern_129: RegExp;
            export { pattern_129 as pattern };
            let greedy_48: boolean;
            export { greedy_48 as greedy };
        }
        export { comment_34 as comment };
        export namespace string_32 {
            let pattern_130: RegExp;
            export { pattern_130 as pattern };
            let greedy_49: boolean;
            export { greedy_49 as greedy };
        }
        export { string_32 as string };
        export namespace identifier_2 {
            let pattern_131: RegExp;
            export { pattern_131 as pattern };
            let greedy_50: boolean;
            export { greedy_50 as greedy };
        }
        export { identifier_2 as identifier };
        let parameter_1: RegExp;
        export { parameter_1 as parameter };
        let keyword_33: RegExp;
        export { keyword_33 as keyword };
        let _function_20: RegExp;
        export { _function_20 as function };
        let boolean_19: RegExp;
        export { boolean_19 as boolean };
        let number_31: RegExp;
        export { number_31 as number };
        let operator_31: RegExp;
        export { operator_31 as operator };
        let punctuation_44: RegExp;
        export { punctuation_44 as punctuation };
    }
    export let n4js: any;
    import n4jsd = n4js;
    export { n4jsd };
    export namespace nasm {
        let comment_35: RegExp;
        export { comment_35 as comment };
        let string_33: RegExp;
        export { string_33 as string };
        export namespace label_2 {
            let pattern_132: RegExp;
            export { pattern_132 as pattern };
            let lookbehind_58: boolean;
            export { lookbehind_58 as lookbehind };
            let alias_49: string;
            export { alias_49 as alias };
        }
        export { label_2 as label };
        let keyword_34: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { keyword_34 as keyword };
        export namespace register {
            let pattern_133: RegExp;
            export { pattern_133 as pattern };
            let alias_50: string;
            export { alias_50 as alias };
        }
        let number_32: RegExp;
        export { number_32 as number };
        let operator_32: RegExp;
        export { operator_32 as operator };
    }
    export namespace neon {
        export namespace comment_36 {
            let pattern_134: RegExp;
            export { pattern_134 as pattern };
            let greedy_51: boolean;
            export { greedy_51 as greedy };
        }
        export { comment_36 as comment };
        export namespace datetime {
            let pattern_135: RegExp;
            export { pattern_135 as pattern };
            let lookbehind_59: boolean;
            export { lookbehind_59 as lookbehind };
            let alias_51: string;
            export { alias_51 as alias };
        }
        export namespace key_2 {
            let pattern_136: RegExp;
            export { pattern_136 as pattern };
            let lookbehind_60: boolean;
            export { lookbehind_60 as lookbehind };
            let alias_52: string;
            export { alias_52 as alias };
        }
        export { key_2 as key };
        export namespace number_33 {
            let pattern_137: RegExp;
            export { pattern_137 as pattern };
            let lookbehind_61: boolean;
            export { lookbehind_61 as lookbehind };
        }
        export { number_33 as number };
        export namespace boolean_20 {
            let pattern_138: RegExp;
            export { pattern_138 as pattern };
            let lookbehind_62: boolean;
            export { lookbehind_62 as lookbehind };
        }
        export { boolean_20 as boolean };
        export namespace _null_1 {
            let pattern_139: RegExp;
            export { pattern_139 as pattern };
            let lookbehind_63: boolean;
            export { lookbehind_63 as lookbehind };
            let alias_53: string;
            export { alias_53 as alias };
        }
        export { _null_1 as null };
        export namespace string_34 {
            let pattern_140: RegExp;
            export { pattern_140 as pattern };
            let lookbehind_64: boolean;
            export { lookbehind_64 as lookbehind };
            let greedy_52: boolean;
            export { greedy_52 as greedy };
        }
        export { string_34 as string };
        export namespace literal {
            let pattern_141: RegExp;
            export { pattern_141 as pattern };
            let lookbehind_65: boolean;
            export { lookbehind_65 as lookbehind };
            let alias_54: string;
            export { alias_54 as alias };
        }
        let punctuation_45: RegExp;
        export { punctuation_45 as punctuation };
    }
    export let nevod: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                'string-attrs': RegExp;
            };
        };
        namespace: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        pattern: {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                'pattern-name': {
                    pattern: RegExp;
                    alias: string;
                };
                fields: {
                    pattern: RegExp;
                    inside: {
                        'field-name': {
                            pattern: RegExp;
                            alias: string;
                        };
                        punctuation: RegExp;
                        operator: {
                            pattern: RegExp;
                            alias: string;
                        };
                    };
                };
            };
        };
        search: {
            pattern: RegExp;
            alias: string;
            lookbehind: boolean;
        };
        keyword: RegExp;
        'standard-pattern': {
            pattern: RegExp;
            inside: {
                'standard-pattern-name': {
                    pattern: RegExp;
                    alias: string;
                };
                quantifier: {
                    pattern: RegExp;
                    alias: string;
                };
                'standard-pattern-attr': {
                    pattern: RegExp;
                    alias: string;
                };
                punctuation: RegExp;
            };
        };
        quantifier: {
            pattern: RegExp;
            alias: string;
        };
        operator: {
            pattern: RegExp;
            alias: string;
        }[];
        'field-capture': ({
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                'field-name': {
                    pattern: RegExp;
                    alias: string;
                };
                colon: RegExp;
            };
        } | {
            pattern: RegExp;
            inside: {
                'field-name': {
                    pattern: RegExp;
                    alias: string;
                };
                colon: RegExp;
            };
            lookbehind?: undefined;
        })[];
        punctuation: RegExp;
        name: RegExp;
    };
    export namespace nim {
        export namespace comment_37 {
            let pattern_142: RegExp;
            export { pattern_142 as pattern };
            let greedy_53: boolean;
            export { greedy_53 as greedy };
        }
        export { comment_37 as comment };
        export namespace string_35 {
            let pattern_143: RegExp;
            export { pattern_143 as pattern };
            let greedy_54: boolean;
            export { greedy_54 as greedy };
        }
        export { string_35 as string };
        export namespace char_3 {
            let pattern_144: RegExp;
            export { pattern_144 as pattern };
            let greedy_55: boolean;
            export { greedy_55 as greedy };
        }
        export { char_3 as char };
        export namespace _function_21 {
            let pattern_145: RegExp;
            export { pattern_145 as pattern };
            let greedy_56: boolean;
            export { greedy_56 as greedy };
            export namespace inside_23 {
                let operator_33: RegExp;
                export { operator_33 as operator };
            }
            export { inside_23 as inside };
        }
        export { _function_21 as function };
        export namespace identifier_3 {
            let pattern_146: RegExp;
            export { pattern_146 as pattern };
            let greedy_57: boolean;
            export { greedy_57 as greedy };
            export namespace inside_24 {
                let punctuation_46: RegExp;
                export { punctuation_46 as punctuation };
            }
            export { inside_24 as inside };
        }
        export { identifier_3 as identifier };
        let number_34: RegExp;
        export { number_34 as number };
        let keyword_35: RegExp;
        export { keyword_35 as keyword };
        export namespace operator_34 {
            let pattern_147: RegExp;
            export { pattern_147 as pattern };
            let lookbehind_66: boolean;
            export { lookbehind_66 as lookbehind };
        }
        export { operator_34 as operator };
        let punctuation_47: RegExp;
        export { punctuation_47 as punctuation };
    }
    export namespace nix {
        export namespace comment_38 {
            let pattern_148: RegExp;
            export { pattern_148 as pattern };
            let greedy_58: boolean;
            export { greedy_58 as greedy };
        }
        export { comment_38 as comment };
        export namespace string_36 {
            let pattern_149: RegExp;
            export { pattern_149 as pattern };
            let greedy_59: boolean;
            export { greedy_59 as greedy };
            export namespace inside_25 {
                export namespace interpolation_2 {
                    let pattern_150: RegExp;
                    export { pattern_150 as pattern };
                    let lookbehind_67: boolean;
                    export { lookbehind_67 as lookbehind };
                    let inside_26: null;
                    export { inside_26 as inside };
                }
                export { interpolation_2 as interpolation };
            }
            export { inside_25 as inside };
        }
        export { string_36 as string };
        let url_1: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { url_1 as url };
        export namespace antiquotation {
            let pattern_151: RegExp;
            export { pattern_151 as pattern };
            let alias_55: string;
            export { alias_55 as alias };
        }
        let number_35: RegExp;
        export { number_35 as number };
        let keyword_36: RegExp;
        export { keyword_36 as keyword };
        let _function_22: RegExp;
        export { _function_22 as function };
        let boolean_21: RegExp;
        export { boolean_21 as boolean };
        let operator_35: RegExp;
        export { operator_35 as operator };
        let punctuation_48: RegExp;
        export { punctuation_48 as punctuation };
    }
    export namespace nsis {
        export namespace comment_39 {
            let pattern_152: RegExp;
            export { pattern_152 as pattern };
            let lookbehind_68: boolean;
            export { lookbehind_68 as lookbehind };
            let greedy_60: boolean;
            export { greedy_60 as greedy };
        }
        export { comment_39 as comment };
        export namespace string_37 {
            let pattern_153: RegExp;
            export { pattern_153 as pattern };
            let greedy_61: boolean;
            export { greedy_61 as greedy };
        }
        export { string_37 as string };
        export namespace keyword_37 {
            let pattern_154: RegExp;
            export { pattern_154 as pattern };
            let lookbehind_69: boolean;
            export { lookbehind_69 as lookbehind };
        }
        export { keyword_37 as keyword };
        let property_6: RegExp;
        export { property_6 as property };
        let constant_4: RegExp;
        export { constant_4 as constant };
        let variable_14: RegExp;
        export { variable_14 as variable };
        let number_36: RegExp;
        export { number_36 as number };
        let operator_36: RegExp;
        export { operator_36 as operator };
        let punctuation_49: RegExp;
        export { punctuation_49 as punctuation };
        export namespace important {
            let pattern_155: RegExp;
            export { pattern_155 as pattern };
            let lookbehind_70: boolean;
            export { lookbehind_70 as lookbehind };
        }
    }
    export let objectivec: any;
    import objc = objectivec;
    export { objc };
    export let ocaml: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        char: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        }[];
        number: RegExp[];
        directive: {
            pattern: RegExp;
            alias: string;
        };
        label: {
            pattern: RegExp;
            alias: string;
        };
        'type-variable': {
            pattern: RegExp;
            alias: string;
        };
        variant: {
            pattern: RegExp;
            alias: string;
        };
        keyword: RegExp;
        boolean: RegExp;
        'operator-like-punctuation': {
            pattern: RegExp;
            alias: string;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    export let openqasm: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        keyword: RegExp;
        'class-name': RegExp;
        function: RegExp;
        constant: RegExp;
        number: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    import qasm = openqasm;
    export { qasm };
    export let oz: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        atom: {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        keyword: RegExp;
        function: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        number: RegExp;
        variable: RegExp;
        'attr-name': RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export namespace parigp {
        let comment_40: RegExp;
        export { comment_40 as comment };
        export namespace string_38 {
            let pattern_156: RegExp;
            export { pattern_156 as pattern };
            let greedy_62: boolean;
            export { greedy_62 as greedy };
        }
        export { string_38 as string };
        let keyword_38: RegExp;
        export { keyword_38 as keyword };
        let _function_23: RegExp;
        export { _function_23 as function };
        export namespace number_37 {
            let pattern_157: RegExp;
            export { pattern_157 as pattern };
            let lookbehind_71: boolean;
            export { lookbehind_71 as lookbehind };
        }
        export { number_37 as number };
        let operator_37: RegExp;
        export { operator_37 as operator };
        let punctuation_50: RegExp;
        export { punctuation_50 as punctuation };
    }
    export namespace pascal {
        export namespace directive_6 {
            let pattern_158: RegExp;
            export { pattern_158 as pattern };
            let greedy_63: boolean;
            export { greedy_63 as greedy };
            let alias_56: string[];
            export { alias_56 as alias };
        }
        export { directive_6 as directive };
        export namespace comment_41 {
            let pattern_159: RegExp;
            export { pattern_159 as pattern };
            let greedy_64: boolean;
            export { greedy_64 as greedy };
        }
        export { comment_41 as comment };
        export namespace string_39 {
            let pattern_160: RegExp;
            export { pattern_160 as pattern };
            let greedy_65: boolean;
            export { greedy_65 as greedy };
        }
        export { string_39 as string };
        export namespace asm {
            let pattern_161: RegExp;
            export { pattern_161 as pattern };
            let lookbehind_72: boolean;
            export { lookbehind_72 as lookbehind };
            let greedy_66: boolean;
            export { greedy_66 as greedy };
            let inside_27: null;
            export { inside_27 as inside };
        }
        let keyword_39: {
            pattern: RegExp;
            lookbehind: boolean;
        }[];
        export { keyword_39 as keyword };
        let number_38: RegExp[];
        export { number_38 as number };
        let operator_38: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { operator_38 as operator };
        let punctuation_51: RegExp;
        export { punctuation_51 as punctuation };
    }
    import objectpascal = pascal;
    export { objectpascal };
    export let psl: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                symbol: RegExp;
            };
        };
        'heredoc-string': {
            pattern: RegExp;
            alias: string;
            greedy: boolean;
        };
        keyword: RegExp;
        constant: RegExp;
        boolean: RegExp;
        variable: RegExp;
        builtin: {
            pattern: RegExp;
            alias: string;
        };
        'foreach-variable': {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        function: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export namespace pcaxis {
        let string_40: RegExp;
        export { string_40 as string };
        export namespace keyword_40 {
            let pattern_162: RegExp;
            export { pattern_162 as pattern };
            let lookbehind_73: boolean;
            export { lookbehind_73 as lookbehind };
            let greedy_67: boolean;
            export { greedy_67 as greedy };
            let inside_28: {
                keyword: RegExp;
                language: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        punctuation: RegExp;
                        property: RegExp;
                    };
                };
                'sub-key': {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        parameter: {
                            pattern: RegExp;
                            alias: string;
                        };
                        punctuation: RegExp;
                    };
                };
            };
            export { inside_28 as inside };
        }
        export { keyword_40 as keyword };
        let operator_39: RegExp;
        export { operator_39 as operator };
        export namespace tlist {
            let pattern_163: RegExp;
            export { pattern_163 as pattern };
            let greedy_68: boolean;
            export { greedy_68 as greedy };
            export namespace inside_29 {
                let _function_24: RegExp;
                export { _function_24 as function };
                export namespace property_7 {
                    let pattern_164: RegExp;
                    export { pattern_164 as pattern };
                    let lookbehind_74: boolean;
                    export { lookbehind_74 as lookbehind };
                }
                export { property_7 as property };
                let string_41: RegExp;
                export { string_41 as string };
                let punctuation_52: RegExp;
                export { punctuation_52 as punctuation };
                let operator_40: RegExp;
                export { operator_40 as operator };
            }
            export { inside_29 as inside };
        }
        let punctuation_53: RegExp;
        export { punctuation_53 as punctuation };
        export namespace number_39 {
            let pattern_165: RegExp;
            export { pattern_165 as pattern };
            let lookbehind_75: boolean;
            export { lookbehind_75 as lookbehind };
        }
        export { number_39 as number };
        let boolean_22: RegExp;
        export { boolean_22 as boolean };
    }
    import px = pcaxis;
    export { px };
    export let peoplecode: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        variable: RegExp;
        'function-definition': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                punctuation: RegExp;
            };
        };
        keyword: RegExp;
        'operator-keyword': {
            pattern: RegExp;
            alias: string;
        };
        function: RegExp;
        boolean: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    import pcode = peoplecode;
    export { pcode };
    export let plsql: any;
    export let powerquery: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        'quoted-identifier': {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        constant: RegExp[];
        boolean: RegExp;
        keyword: RegExp;
        function: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        'data-type': {
            pattern: RegExp;
            alias: string;
        };
        number: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    import pq = powerquery;
    export { pq };
    import mscript = powerquery;
    export { mscript };
    export let processing: any;
    export namespace prolog {
        export namespace comment_42 {
            let pattern_166: RegExp;
            export { pattern_166 as pattern };
            let greedy_69: boolean;
            export { greedy_69 as greedy };
        }
        export { comment_42 as comment };
        export namespace string_42 {
            let pattern_167: RegExp;
            export { pattern_167 as pattern };
            let greedy_70: boolean;
            export { greedy_70 as greedy };
        }
        export { string_42 as string };
        let builtin_3: RegExp;
        export { builtin_3 as builtin };
        let _function_25: RegExp;
        export { _function_25 as function };
        let number_40: RegExp;
        export { number_40 as number };
        let operator_41: RegExp;
        export { operator_41 as operator };
        let punctuation_54: RegExp;
        export { punctuation_54 as punctuation };
    }
    export namespace properties {
        let comment_43: RegExp;
        export { comment_43 as comment };
        export namespace value_3 {
            let pattern_168: RegExp;
            export { pattern_168 as pattern };
            let lookbehind_76: boolean;
            export { lookbehind_76 as lookbehind };
            let alias_57: string;
            export { alias_57 as alias };
        }
        export { value_3 as value };
        export namespace key_3 {
            let pattern_169: RegExp;
            export { pattern_169 as pattern };
            let alias_58: string;
            export { alias_58 as alias };
        }
        export { key_3 as key };
        let punctuation_55: RegExp;
        export { punctuation_55 as punctuation };
    }
    export let purebasic: any;
    import pbfasm = purebasic;
    export { pbfasm };
    export let purescript: any;
    import purs = purescript;
    export { purs };
    export let python: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        'string-interpolation': {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                interpolation: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        'format-spec': {
                            pattern: RegExp;
                            lookbehind: boolean;
                        };
                        'conversion-option': {
                            pattern: RegExp;
                            alias: string;
                        };
                        rest: null;
                    };
                };
                string: RegExp;
            };
        };
        'triple-quoted-string': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        function: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
        };
        decorator: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string[];
            inside: {
                punctuation: RegExp;
            };
        };
        keyword: RegExp;
        builtin: RegExp;
        boolean: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    import py = python;
    export { py };
    export let qs: any;
    export namespace q {
        let string_43: RegExp;
        export { string_43 as string };
        let comment_44: ({
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        } | {
            pattern: RegExp;
            greedy: boolean;
            lookbehind?: undefined;
        })[];
        export { comment_44 as comment };
        let symbol_4: RegExp;
        export { symbol_4 as symbol };
        export namespace datetime_1 {
            let pattern_170: RegExp;
            export { pattern_170 as pattern };
            let alias_59: string;
            export { alias_59 as alias };
        }
        export { datetime_1 as datetime };
        let number_41: RegExp;
        export { number_41 as number };
        let keyword_41: RegExp;
        export { keyword_41 as keyword };
        export namespace adverb_1 {
            let pattern_171: RegExp;
            export { pattern_171 as pattern };
            let alias_60: string;
            export { alias_60 as alias };
        }
        export { adverb_1 as adverb };
        export namespace verb_2 {
            let pattern_172: RegExp;
            export { pattern_172 as pattern };
            let alias_61: string;
            export { alias_61 as alias };
        }
        export { verb_2 as verb };
        let punctuation_56: RegExp;
        export { punctuation_56 as punctuation };
    }
    export let qore: any;
    export let r: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'percent-operator': {
            pattern: RegExp;
            alias: string;
        };
        boolean: RegExp;
        ellipsis: RegExp;
        number: RegExp[];
        keyword: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let racket: any;
    import rkt = racket;
    export { rkt };
    export let reason: any;
    export namespace rego {
        let comment_45: RegExp;
        export { comment_45 as comment };
        export namespace property_8 {
            let pattern_173: RegExp;
            export { pattern_173 as pattern };
            let lookbehind_77: boolean;
            export { lookbehind_77 as lookbehind };
            let greedy_71: boolean;
            export { greedy_71 as greedy };
        }
        export { property_8 as property };
        export namespace string_44 {
            let pattern_174: RegExp;
            export { pattern_174 as pattern };
            let lookbehind_78: boolean;
            export { lookbehind_78 as lookbehind };
            let greedy_72: boolean;
            export { greedy_72 as greedy };
        }
        export { string_44 as string };
        let keyword_42: RegExp;
        export { keyword_42 as keyword };
        let boolean_23: RegExp;
        export { boolean_23 as boolean };
        export namespace _function_26 {
            let pattern_175: RegExp;
            export { pattern_175 as pattern };
            export namespace inside_30 {
                let namespace_1: RegExp;
                export { namespace_1 as namespace };
                let punctuation_57: RegExp;
                export { punctuation_57 as punctuation };
            }
            export { inside_30 as inside };
        }
        export { _function_26 as function };
        let number_42: RegExp;
        export { number_42 as number };
        let operator_42: RegExp;
        export { operator_42 as operator };
        let punctuation_58: RegExp;
        export { punctuation_58 as punctuation };
    }
    export namespace renpy {
        export namespace comment_46 {
            let pattern_176: RegExp;
            export { pattern_176 as pattern };
            let lookbehind_79: boolean;
            export { lookbehind_79 as lookbehind };
        }
        export { comment_46 as comment };
        export namespace string_45 {
            let pattern_177: RegExp;
            export { pattern_177 as pattern };
            let greedy_73: boolean;
            export { greedy_73 as greedy };
        }
        export { string_45 as string };
        let _function_27: RegExp;
        export { _function_27 as function };
        let property_9: RegExp;
        export { property_9 as property };
        let tag_2: RegExp;
        export { tag_2 as tag };
        let keyword_43: RegExp;
        export { keyword_43 as keyword };
        let boolean_24: RegExp;
        export { boolean_24 as boolean };
        let number_43: RegExp;
        export { number_43 as number };
        let operator_43: RegExp;
        export { operator_43 as operator };
        let punctuation_59: RegExp;
        export { punctuation_59 as punctuation };
    }
    import rpy = renpy;
    export { rpy };
    export let rescript: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        char: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'class-name': RegExp;
        function: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        number: RegExp;
        boolean: RegExp;
        'attr-value': RegExp;
        constant: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        tag: {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                operator: RegExp;
            };
        };
        keyword: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    import res = rescript;
    export { res };
    export let rest: {
        table: {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                punctuation: RegExp;
            };
        }[];
        'substitution-def': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                substitution: {
                    pattern: RegExp;
                    alias: string;
                    inside: {
                        punctuation: RegExp;
                    };
                };
                directive: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                    inside: {
                        punctuation: RegExp;
                    };
                };
            };
        };
        'link-target': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
            inside: {
                punctuation: RegExp;
            };
        }[];
        directive: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
            inside: {
                punctuation: RegExp;
            };
        };
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        title: ({
            pattern: RegExp;
            inside: {
                punctuation: RegExp;
                important: RegExp;
            };
            lookbehind?: undefined;
        } | {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                punctuation: RegExp;
                important: RegExp;
            };
        })[];
        hr: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        field: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'command-line-option': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'literal-block': {
            pattern: RegExp;
            inside: {
                'literal-block-punctuation': {
                    pattern: RegExp;
                    alias: string;
                };
            };
        };
        'quoted-literal-block': {
            pattern: RegExp;
            inside: {
                'literal-block-punctuation': {
                    pattern: RegExp;
                    alias: string;
                };
            };
        };
        'list-bullet': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        'doctest-block': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                punctuation: RegExp;
            };
        };
        inline: {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                bold: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                italic: {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                'inline-literal': {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
                role: {
                    pattern: RegExp;
                    alias: string;
                    inside: {
                        punctuation: RegExp;
                    };
                };
                'interpreted-text': {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
                substitution: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    alias: string;
                };
                punctuation: RegExp;
            };
        }[];
        link: {
            pattern: RegExp;
            alias: string;
            inside: {
                punctuation: RegExp;
            };
        }[];
        punctuation: {
            pattern: RegExp;
            lookbehind: boolean;
        };
    };
    export namespace rip {
        export namespace comment_47 {
            let pattern_178: RegExp;
            export { pattern_178 as pattern };
            let greedy_74: boolean;
            export { greedy_74 as greedy };
        }
        export { comment_47 as comment };
        export namespace char_4 {
            let pattern_179: RegExp;
            export { pattern_179 as pattern };
            let greedy_75: boolean;
            export { greedy_75 as greedy };
        }
        export { char_4 as char };
        export namespace string_46 {
            let pattern_180: RegExp;
            export { pattern_180 as pattern };
            let greedy_76: boolean;
            export { greedy_76 as greedy };
        }
        export { string_46 as string };
        export namespace regex_3 {
            let pattern_181: RegExp;
            export { pattern_181 as pattern };
            let lookbehind_80: boolean;
            export { lookbehind_80 as lookbehind };
            let greedy_77: boolean;
            export { greedy_77 as greedy };
        }
        export { regex_3 as regex };
        let keyword_44: RegExp;
        export { keyword_44 as keyword };
        let builtin_4: RegExp;
        export { builtin_4 as builtin };
        let boolean_25: RegExp;
        export { boolean_25 as boolean };
        export let date: RegExp;
        export let time: RegExp;
        let datetime_2: RegExp;
        export { datetime_2 as datetime };
        let symbol_5: RegExp;
        export { symbol_5 as symbol };
        let number_44: RegExp;
        export { number_44 as number };
        let punctuation_60: RegExp;
        export { punctuation_60 as punctuation };
        export let reference: RegExp;
    }
    export namespace roboconf {
        let comment_48: RegExp;
        export { comment_48 as comment };
        export namespace keyword_45 {
            let pattern_182: RegExp;
            export { pattern_182 as pattern };
            let lookbehind_81: boolean;
            export { lookbehind_81 as lookbehind };
        }
        export { keyword_45 as keyword };
        export namespace component {
            let pattern_183: RegExp;
            export { pattern_183 as pattern };
            let alias_62: string;
            export { alias_62 as alias };
        }
        let property_10: RegExp;
        export { property_10 as property };
        export namespace value_4 {
            let pattern_184: RegExp;
            export { pattern_184 as pattern };
            let lookbehind_82: boolean;
            export { lookbehind_82 as lookbehind };
            let alias_63: string;
            export { alias_63 as alias };
        }
        export { value_4 as value };
        export namespace optional {
            let pattern_185: RegExp;
            export { pattern_185 as pattern };
            let alias_64: string;
            export { alias_64 as alias };
        }
        export namespace wildcard {
            let pattern_186: RegExp;
            export { pattern_186 as pattern };
            let lookbehind_83: boolean;
            export { lookbehind_83 as lookbehind };
            let alias_65: string;
            export { alias_65 as alias };
        }
        let punctuation_61: RegExp;
        export { punctuation_61 as punctuation };
    }
    export let scss: any;
    export let scala: any;
    export let smali: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                'class-name': {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                namespace: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: {
                        punctuation: RegExp;
                    };
                };
                builtin: RegExp;
            };
        };
        builtin: {
            pattern: RegExp;
            lookbehind: boolean;
        }[];
        keyword: {
            pattern: RegExp;
            lookbehind: boolean;
        }[];
        function: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        field: {
            pattern: RegExp;
            alias: string;
        };
        register: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        boolean: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        number: {
            pattern: RegExp;
            lookbehind: boolean;
        };
        label: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        operator: RegExp;
        punctuation: RegExp;
    };
    export let smalltalk: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        char: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        symbol: RegExp;
        'block-arguments': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                variable: RegExp;
                punctuation: RegExp;
            };
        };
        'temporary-variables': {
            pattern: RegExp;
            inside: {
                variable: RegExp;
                punctuation: RegExp;
            };
        };
        keyword: RegExp;
        boolean: RegExp;
        number: RegExp[];
        operator: RegExp;
        punctuation: RegExp;
    };
    export let solidity: any;
    import sol = solidity;
    export { sol };
    export let turtle: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        'multiline-string': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
            inside: {
                comment: RegExp;
            };
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        url: {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                punctuation: RegExp;
            };
        };
        function: {
            pattern: RegExp;
            inside: {
                'local-name': {
                    pattern: RegExp;
                    lookbehind: boolean;
                };
                prefix: {
                    pattern: RegExp;
                    inside: {
                        punctuation: RegExp;
                    };
                };
            };
        };
        number: RegExp;
        punctuation: RegExp;
        boolean: RegExp;
        keyword: RegExp[];
        tag: {
            pattern: RegExp;
            inside: {
                punctuation: RegExp;
            };
        };
    };
    import trig = turtle;
    export { trig };
    export let sparql: any;
    import rq = sparql;
    export { rq };
    export let sqf: any;
    export let squirrel: any;
    export let stata: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        }[];
        'string-literal': {
            pattern: RegExp;
            greedy: boolean;
            inside: {
                interpolation: {
                    pattern: RegExp;
                    inside: {
                        punctuation: RegExp;
                        expression: {
                            pattern: RegExp;
                            inside: null;
                        };
                    };
                };
                string: RegExp;
            };
        };
        mata: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
            inside: any;
        };
        java: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
            inside: any;
        };
        python: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
            inside: any;
        };
        command: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
        };
        variable: RegExp;
        keyword: RegExp;
        boolean: RegExp;
        number: RegExp;
        function: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let iecst: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        }[];
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        keyword: RegExp[];
        'class-name': RegExp;
        address: {
            pattern: RegExp;
            alias: string;
        };
        number: RegExp;
        boolean: RegExp;
        operator: RegExp;
        function: RegExp;
        punctuation: RegExp;
    };
    export let supercollider: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        char: {
            pattern: RegExp;
            greedy: boolean;
        };
        symbol: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        keyword: RegExp;
        boolean: RegExp;
        label: {
            pattern: RegExp;
            alias: string;
        };
        number: RegExp;
        'class-name': RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    import sclang = supercollider;
    export { sclang };
    export let swift: {
        comment: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        };
        'string-literal': ({
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            inside: {
                interpolation: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: null;
                };
                'interpolation-punctuation': {
                    pattern: RegExp;
                    alias: string;
                };
                punctuation: RegExp;
                string: RegExp;
            };
        } | {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            inside: {
                interpolation: {
                    pattern: RegExp;
                    lookbehind: boolean;
                    inside: null;
                };
                'interpolation-punctuation': {
                    pattern: RegExp;
                    alias: string;
                };
                string: RegExp;
                punctuation?: undefined;
            };
        })[];
        directive: {
            pattern: RegExp;
            alias: string;
            inside: {
                'directive-name': RegExp;
                boolean: RegExp;
                number: RegExp;
                operator: RegExp;
                punctuation: RegExp;
            };
        };
        literal: {
            pattern: RegExp;
            alias: string;
        };
        'other-directive': {
            pattern: RegExp;
            alias: string;
        };
        attribute: {
            pattern: RegExp;
            alias: string;
        };
        'function-definition': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        label: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        keyword: RegExp;
        boolean: RegExp;
        nil: {
            pattern: RegExp;
            alias: string;
        };
        'short-argument': RegExp;
        omit: {
            pattern: RegExp;
            alias: string;
        };
        number: RegExp;
        'class-name': RegExp;
        function: RegExp;
        constant: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let t4: any;
    export let vbnet: any;
    export namespace tap {
        export let fail: RegExp;
        export let pass: RegExp;
        export let pragma: RegExp;
        export let bailout: RegExp;
        export let version: RegExp;
        export let plan: RegExp;
        export namespace subtest {
            let pattern_187: RegExp;
            export { pattern_187 as pattern };
            let greedy_78: boolean;
            export { greedy_78 as greedy };
        }
        let punctuation_62: RegExp;
        export { punctuation_62 as punctuation };
        let directive_7: RegExp;
        export { directive_7 as directive };
        export namespace yamlish {
            let pattern_188: RegExp;
            export { pattern_188 as pattern };
            let lookbehind_84: boolean;
            export { lookbehind_84 as lookbehind };
            let inside_31: any;
            export { inside_31 as inside };
            let alias_66: string;
            export { alias_66 as alias };
        }
    }
    export namespace tcl {
        export namespace comment_49 {
            let pattern_189: RegExp;
            export { pattern_189 as pattern };
            let lookbehind_85: boolean;
            export { lookbehind_85 as lookbehind };
        }
        export { comment_49 as comment };
        export namespace string_47 {
            let pattern_190: RegExp;
            export { pattern_190 as pattern };
            let greedy_79: boolean;
            export { greedy_79 as greedy };
        }
        export { string_47 as string };
        let variable_15: {
            pattern: RegExp;
            lookbehind: boolean;
        }[];
        export { variable_15 as variable };
        export namespace _function_28 {
            let pattern_191: RegExp;
            export { pattern_191 as pattern };
            let lookbehind_86: boolean;
            export { lookbehind_86 as lookbehind };
        }
        export { _function_28 as function };
        let builtin_5: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        export { builtin_5 as builtin };
        export namespace scope {
            let pattern_192: RegExp;
            export { pattern_192 as pattern };
            let lookbehind_87: boolean;
            export { lookbehind_87 as lookbehind };
            let alias_67: string;
            export { alias_67 as alias };
        }
        export namespace keyword_46 {
            let pattern_193: RegExp;
            export { pattern_193 as pattern };
            let lookbehind_88: boolean;
            export { lookbehind_88 as lookbehind };
        }
        export { keyword_46 as keyword };
        let operator_44: RegExp;
        export { operator_44 as operator };
        let punctuation_63: RegExp;
        export { punctuation_63 as punctuation };
    }
    export let twig: {
        comment: RegExp;
        'tag-name': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        delimiter: {
            pattern: RegExp;
            alias: string;
        };
        string: {
            pattern: RegExp;
            inside: {
                punctuation: RegExp;
            };
        };
        keyword: RegExp;
        boolean: RegExp;
        number: RegExp;
        operator: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        punctuation: RegExp;
    };
    export let unrealscript: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        category: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            alias: string;
        };
        metadata: {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
            inside: {
                property: RegExp;
                operator: RegExp;
                punctuation: RegExp;
            };
        };
        macro: {
            pattern: RegExp;
            alias: string;
        };
        'class-name': {
            pattern: RegExp;
            lookbehind: boolean;
        };
        keyword: RegExp;
        function: RegExp;
        boolean: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let uc: any;
    import uscript = unrealscript;
    export { uscript };
    export let uorazor: {
        'comment-hash': {
            pattern: RegExp;
            alias: string;
            greedy: boolean;
        };
        'comment-slash': {
            pattern: RegExp;
            alias: string;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            inside: {
                punctuation: RegExp;
            };
            greedy: boolean;
        };
        'source-layers': {
            pattern: RegExp;
            alias: string;
        };
        'source-commands': {
            pattern: RegExp;
            alias: string;
        };
        'tag-name': {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        delimiter: {
            pattern: RegExp;
            alias: string;
        };
        function: RegExp;
        keyword: RegExp;
        boolean: RegExp;
        number: RegExp;
        operator: (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        punctuation: RegExp;
    };
    export namespace uri {
        namespace scheme {
            let pattern_194: RegExp;
            export { pattern_194 as pattern };
            let greedy_80: boolean;
            export { greedy_80 as greedy };
            let inside_32: {
                'scheme-delimiter': RegExp;
            };
            export { inside_32 as inside };
        }
        namespace fragment {
            let pattern_195: RegExp;
            export { pattern_195 as pattern };
            let inside_33: {
                'fragment-delimiter': RegExp;
            };
            export { inside_33 as inside };
        }
        namespace query {
            let pattern_196: RegExp;
            export { pattern_196 as pattern };
            let inside_34: {
                'query-delimiter': {
                    pattern: RegExp;
                    greedy: boolean;
                };
                'pair-delimiter': RegExp;
                pair: {
                    pattern: RegExp;
                    inside: {
                        key: RegExp;
                        value: {
                            pattern: RegExp;
                            lookbehind: boolean;
                        };
                    };
                };
            };
            export { inside_34 as inside };
        }
        namespace authority {
            let pattern_197: RegExp;
            export { pattern_197 as pattern };
            let inside_35: {
                'authority-delimiter': RegExp;
                'user-info-segment': {
                    pattern: RegExp;
                    inside: {
                        'user-info-delimiter': RegExp;
                        'user-info': RegExp;
                    };
                };
                'port-segment': {
                    pattern: RegExp;
                    inside: {
                        'port-delimiter': RegExp;
                        port: RegExp;
                    };
                };
                host: {
                    pattern: RegExp;
                    inside: {
                        'ip-literal': {
                            pattern: RegExp;
                            inside: {
                                'ip-literal-delimiter': RegExp;
                                'ipv-future': RegExp;
                                'ipv6-address': RegExp;
                            };
                        };
                        'ipv4-address': RegExp;
                    };
                };
            };
            export { inside_35 as inside };
        }
        namespace path {
            let pattern_198: RegExp;
            export { pattern_198 as pattern };
            let inside_36: {
                'path-separator': RegExp;
            };
            export { inside_36 as inside };
        }
    }
    import url_2 = uri;
    export { url_2 as url };
    export let vala: any;
    export let verilog: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        'kernel-function': {
            pattern: RegExp;
            alias: string;
        };
        constant: RegExp;
        function: RegExp;
        keyword: RegExp;
        important: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export let vhdl: {
        comment: RegExp;
        'vhdl-vectors': {
            pattern: RegExp;
            alias: string;
        };
        'quoted-function': {
            pattern: RegExp;
            alias: string;
        };
        string: RegExp;
        attribute: {
            pattern: RegExp;
            alias: string;
        };
        keyword: RegExp;
        boolean: RegExp;
        function: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export namespace vim {
        let string_48: RegExp;
        export { string_48 as string };
        let comment_50: RegExp;
        export { comment_50 as comment };
        let _function_29: RegExp;
        export { _function_29 as function };
        let keyword_47: RegExp;
        export { keyword_47 as keyword };
        let builtin_6: RegExp;
        export { builtin_6 as builtin };
        let number_45: RegExp;
        export { number_45 as number };
        let operator_45: RegExp;
        export { operator_45 as operator };
        let punctuation_64: RegExp;
        export { punctuation_64 as punctuation };
    }
    export let vb: any;
    export let vba: any;
    export namespace warpscript {
        let comment_51: RegExp;
        export { comment_51 as comment };
        export namespace string_49 {
            let pattern_199: RegExp;
            export { pattern_199 as pattern };
            let greedy_81: boolean;
            export { greedy_81 as greedy };
        }
        export { string_49 as string };
        let variable_16: RegExp;
        export { variable_16 as variable };
        export namespace macro_1 {
            let pattern_200: RegExp;
            export { pattern_200 as pattern };
            let alias_68: string;
            export { alias_68 as alias };
        }
        export { macro_1 as macro };
        let keyword_48: RegExp;
        export { keyword_48 as keyword };
        let number_46: RegExp;
        export { number_46 as number };
        let boolean_26: RegExp;
        export { boolean_26 as boolean };
        let punctuation_65: RegExp;
        export { punctuation_65 as punctuation };
        let operator_46: RegExp;
        export { operator_46 as operator };
    }
    export namespace wasm {
        let comment_52: (RegExp | {
            pattern: RegExp;
            greedy: boolean;
        })[];
        export { comment_52 as comment };
        export namespace string_50 {
            let pattern_201: RegExp;
            export { pattern_201 as pattern };
            let greedy_82: boolean;
            export { greedy_82 as greedy };
        }
        export { string_50 as string };
        let keyword_49: (RegExp | {
            pattern: RegExp;
            inside: {
                operator: RegExp;
                punctuation?: undefined;
            };
        } | {
            pattern: RegExp;
            inside: {
                punctuation: RegExp;
                operator?: undefined;
            };
        })[];
        export { keyword_49 as keyword };
        let variable_17: RegExp;
        export { variable_17 as variable };
        let number_47: RegExp;
        export { number_47 as number };
        let punctuation_66: RegExp;
        export { punctuation_66 as punctuation };
    }
    export let wgsl: {
        comment: {
            pattern: RegExp;
            greedy: boolean;
        };
        'builtin-attribute': {
            pattern: RegExp;
            lookbehind: boolean;
            inside: {
                attribute: {
                    pattern: RegExp;
                    alias: string;
                };
                punctuation: RegExp;
                'built-in-values': {
                    pattern: RegExp;
                    alias: string;
                };
            };
        };
        attributes: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        functions: {
            pattern: RegExp;
            lookbehind: boolean;
            alias: string;
        };
        keyword: RegExp;
        builtin: RegExp;
        'function-calls': {
            pattern: RegExp;
            alias: string;
        };
        'class-name': RegExp;
        'bool-literal': {
            pattern: RegExp;
            alias: string;
        };
        'hex-int-literal': {
            pattern: RegExp;
            alias: string;
        };
        'hex-float-literal': {
            pattern: RegExp;
            alias: string;
        };
        'decimal-float-literal': {
            pattern: RegExp;
            alias: string;
        }[];
        'int-literal': {
            pattern: RegExp;
            alias: string;
        };
        operator: ({
            pattern: RegExp;
            lookbehind?: undefined;
        } | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        punctuation: RegExp;
    };
    export let wiki: any;
    export let wolfram: {
        comment: RegExp;
        string: {
            pattern: RegExp;
            greedy: boolean;
        };
        keyword: RegExp;
        context: {
            pattern: RegExp;
            alias: string;
        };
        blank: {
            pattern: RegExp;
            alias: string;
        };
        'global-variable': {
            pattern: RegExp;
            alias: string;
        };
        boolean: RegExp;
        number: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    import mathematica = wolfram;
    export { mathematica };
    import wl = wolfram;
    export { wl };
    import nb = wolfram;
    export { nb };
    export let wren: {
        comment: ({
            pattern: RegExp;
            greedy: boolean;
            lookbehind?: undefined;
        } | {
            pattern: RegExp;
            lookbehind: boolean;
            greedy: boolean;
        })[];
        'triple-quoted-string': {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        'string-literal': null;
        hashbang: {
            pattern: RegExp;
            greedy: boolean;
            alias: string;
        };
        attribute: {
            pattern: RegExp;
            alias: string;
        };
        'class-name': (RegExp | {
            pattern: RegExp;
            lookbehind: boolean;
        })[];
        constant: RegExp;
        null: {
            pattern: RegExp;
            alias: string;
        };
        keyword: RegExp;
        boolean: RegExp;
        number: RegExp;
        function: RegExp;
        operator: RegExp;
        punctuation: RegExp;
    };
    export namespace xojo {
        export namespace comment_53 {
            let pattern_202: RegExp;
            export { pattern_202 as pattern };
            let greedy_83: boolean;
            export { greedy_83 as greedy };
        }
        export { comment_53 as comment };
        export namespace string_51 {
            let pattern_203: RegExp;
            export { pattern_203 as pattern };
            let greedy_84: boolean;
            export { greedy_84 as greedy };
        }
        export { string_51 as string };
        let number_48: RegExp[];
        export { number_48 as number };
        export namespace directive_8 {
            let pattern_204: RegExp;
            export { pattern_204 as pattern };
            let alias_69: string;
            export { alias_69 as alias };
        }
        export { directive_8 as directive };
        let keyword_50: RegExp;
        export { keyword_50 as keyword };
        let operator_47: RegExp;
        export { operator_47 as operator };
        let punctuation_67: RegExp;
        export { punctuation_67 as punctuation };
    }
    export namespace yang {
        let comment_54: RegExp;
        export { comment_54 as comment };
        export namespace string_52 {
            let pattern_205: RegExp;
            export { pattern_205 as pattern };
            let greedy_85: boolean;
            export { greedy_85 as greedy };
        }
        export { string_52 as string };
        export namespace keyword_51 {
            let pattern_206: RegExp;
            export { pattern_206 as pattern };
            let lookbehind_89: boolean;
            export { lookbehind_89 as lookbehind };
        }
        export { keyword_51 as keyword };
        export namespace namespace_2 {
            let pattern_207: RegExp;
            export { pattern_207 as pattern };
            let lookbehind_90: boolean;
            export { lookbehind_90 as lookbehind };
        }
        export { namespace_2 as namespace };
        let boolean_27: RegExp;
        export { boolean_27 as boolean };
        let operator_48: RegExp;
        export { operator_48 as operator };
        let punctuation_68: RegExp;
        export { punctuation_68 as punctuation };
    }
}
