package com.example.toonners.exception.member;

public class DuplicatedUserException extends RuntimeException {
    public DuplicatedUserException() {
        super("입력하신 정보로 등록된 유저가 존재합니다");
    }
}

