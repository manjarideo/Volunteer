import axios from "axios";
import crypto from "crypto";
import {Volunteer} from "../models/volunteer.js"

const cryptomus = axios.create({baseURL:""})