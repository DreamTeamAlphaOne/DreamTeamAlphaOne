import cv2
import os
import face_recognition
import numpy as np
import pickle


def findFace():
    video_capture = cv2.VideoCapture(0)

    friendsIMG = face_recognition.load_image_file("img/friendsPic.jpg")
    friendsIMG_encode = face_recognition.face_encodings(friendsIMG)[0]

    landonSchool = face_recognition.load_image_file("img/Landon_School.jpeg")
    landonSchool_encode = face_recognition.face_encodings(landonSchool)[0]

    known_face_encodings = [
        friendsIMG_encode,
        landonSchool_encode
    ]
    known_face_names = [
        "Friends",
        "Landon"
    ]

    face_locations = []
    face_encodings = []
    face_names = []
    process_this_frame = True
    while True:
        ret, frame = video_capture.read()
        small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

        rgb_small_frame = small_frame[:, :, ::-1]

        if process_this_frame:
            face_locations = face_recognition.face_locations(rgb_small_frame)
            face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

            face_names = []

            for face_encoding in face_encodings:
                matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
                name = "Unknown"

                face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = known_face_names[best_match_index]

                face_names.append(name)

            process_this_frame = not process_this_frame

            for (top, right, bottom, left), name in zip(face_locations, face_names):

                top *= 4
                right *= 4
                bottom *= 4
                left *= 4

                cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

                cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
                font = cv2.FONT_HERSHEY_DUPLEX
                cv2.putText(frame, name(left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
            cv2.imshow('Video', frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    video_capture.release()
    cv2.destoryAllWindows()

findFace()

def faceEmotion():
    imagePaths = list(paths.list_images('img/friendsPic.jpg'))
    knownEncodings = []
    knownNames = []
    for (i, imagePath) in enumerate(imagePaths):
        name = imagePath.split(os.path.sep)[-2]
        image = cv2.imread(imagePath)
        rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        boxes = face_recognition.face_locations(rgb, model='hog')
        encodings = face_recognition.face_encodings(rgb, boxes)
        for encoding in encodings:
            knownEncodings.append(encoding)
            knownNames.append(name)
    data = {"encodings": knownEncodings, "names": knownNames}
    f = open("face_enc", "wb")
    f.write(pickle.dumps(data))
    f.close()

faceEmotion()